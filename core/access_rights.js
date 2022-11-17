import auth from "@/api/auth";

export default {
  /**
   * Function to check registered token inside app
   * @returns
   */
  ambilToken: () => {
    const token = process.server ? undefined : localStorage.getItem("token");
    const token_valid = token == false || token == null || token == undefined;
    if (token_valid) {
      return false;
    }
    return token;
  },

  ambilIzinHalaman: (token, key) =>
    new Promise((resolve, reject) => {
      const response_obj = {
        valid: true,
        msg: "",
        data: {},
      };

      /** Doing a check if the token is valid (client side via local storage) */
      if (!token) {
        response_obj.valid = false;
        response_obj.msg = "Token tidak valid";
        reject(response_obj);
      }

      /** Check token if the token is valid (server side via api) */
      auth
        .check_page_authorization(token, key)
        .then((response) => {
          const otorisasiRole = response.data.role;
          const otorisasiHalaman = response.data.izin;

          /** Cek izin akses halaman */
          if (!otorisasiHalaman.bisa_akses_halaman) {
            response_obj.valid = false;
            response_obj.msg = "Anda tidak memiliki akses atas halaman ini";
            localStorage.clear();
            return reject(response_obj);
          }

          resolve({
            valid: true,
            data: {
              otorisasiRole: otorisasiRole,
              otorisasiHalaman: otorisasiHalaman,
            },
          });
        })
        .catch((err) => {
          response_obj.valid = false;
          response_obj.msg = err.response.data.msg;
          reject(response_obj);
        });
    }),
};
