export default {
  currency: (prefix = "Rp. ", value = 0) => {
    value = value.toString();
    var number_string = value.replace(/[^,\d]/g, "").toString();
    var split = number_string.split(",");
    var sisa = split[0].length % 3;
    var rupiah = split[0].substr(0, sisa);
    var ribuan = split[0].substr(sisa).match(/\d{3}/gi);
    var separator;

    // tambahkan titik jika yang di input sudah menjadi value ribuan
    if (ribuan) {
      separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
    return prefix == undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";
  },

  extractKeys: function (obj_data) {
    return Object.keys(obj_data);
  },

  productLabel: (code, name, variant) => {
    return code + " | " + name + " - " + variant;
  },

  inputNumberComma: (value) => {
    return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
};
