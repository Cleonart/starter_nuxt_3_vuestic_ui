import HTTP from "./commonHTTP";

export default {
  endpoint: "/model/v1/",
  http: HTTP,

  /**
   *! DEPRECATED SOON
   * */
  create: function (data) {
    return HTTP.post(this.endpoint + "/create", {
      params: {
        data: data,
      },
    });
  },
  update: function (id = undefined, data = undefined) {
    return HTTP.post(this.endpoint + "/update", {
      params: {
        id: id,
        data: data,
      },
    });
  },
  find: function (where = {}, skip = 0, take = undefined, order_by = {}) {
    return HTTP.post(this.endpoint + "/find", {
      params: {
        where: where,
        skip: skip,
        take: take,
        orderBy: order_by,
      },
    });
  },

  /***
   * * PRISMA ORM
   * * New Flow
   */

  /**
   * Prisma ORM
   * Function to find unique value
   * https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#findunique
   */
  findUnique: function ({
    where = undefined,
    select = undefined,
    include = undefined,
  }) {
    return HTTP.post(this.endpoint + "/findUnique", {
      params: {
        where: where,
        select: select,
        include: include,
      },
    });
  },

  /**
   * Function to find unique value and throw error if it cannot find the record
   * https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#finduniqueorthrow
   */
  findUniqueOrThrow: function ({}) {
    return HTTP.post(this.endpoint + "/findUniqueOrThrow", {
      params: {},
    });
  },

  /**
   * Function to read multiple value data
   * https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#findmany
   */
  findMany: function ({
    distinct = undefined,
    where = undefined,
    orderBy = { id: "desc" },
    skip = undefined,
    cursor = undefined,
    take = undefined,
    select = undefined,
    include = undefined,
  }) {
    return HTTP.post(this.endpoint + "/findMany", {
      params: {
        where: where,
        distinct: distinct,
        orderBy: orderBy,
        skip: skip,
        cursor: cursor,
        take: take,
        select: select,
        include: include,
      },
    });
  },

  /**
   * creates a new database record.
   * https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#create
   */
  create: function ({
    data = undefined,
    select = undefined,
    include = undefined,
  }) {
    return HTTP.post(this.endpoint + "/create", {
      params: {
        data: data,
        select: select,
        include: include,
      },
    });
  },

  /**
   * Updates an existing database record.
   * https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#update
   */
  update: function ({
    data = undefined,
    where = undefined,
    select = undefined,
    include = undefined,
  }) {
    return HTTP.post(this.endpoint + "/update", {
      params: {
        data: data,
        where: where,
        select: select,
        include: include,
      },
    });
  },

  /**
   * updates an existing or creates a new database record.
   * https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#upsert
   */
  upsert: function ({
    create = create,
    update = update,
    where = undefined,
    select = undefined,
    include = undefined,
  }) {
    return HTTP.post(this.endpoint + "/upsert", {
      params: {
        create: create,
        update: update,
        where: where,
        select: select,
        include: include,
      },
    });
  },

  /**
   * updates an existing or creates a new database record.
   * https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#delete
   */
  delete: function ({
    where = undefined,
    select = undefined,
    include = undefined,
  }) {
    return HTTP.post(this.endpoint + "/delete", {
      params: {
        where: where,
        select: select,
        include: include,
      },
    });
  },

  /**
   * creates multiple records in a transaction.
   * https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
   */
  createMany: function ({ data = undefined, skipDuplicates = undefined }) {
    return HTTP.post(this.endpoint + "/createMany", {
      params: {
        data: data,
        skipDuplicates: skipDuplicates,
      },
    });
  },

  /**
   * updates a batch of existing database records in bulk and returns the number of updated records.
   * https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#updatemany
   */
  updateMany: function ({
    data = undefined,
    skipDuplicates = undefined,
    where = {},
  }) {
    return HTTP.post(this.endpoint + "/updateMany", {
      params: {
        data: data,
        where: where,
        skipDuplicates: skipDuplicates,
      },
    });
  },

  /**
   * updates a batch of existing database records in bulk and returns the number of updated records.
   * https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#deletemany
   */
  deleteMany: function ({ where = undefined }) {
    return HTTP.post(this.endpoint + "/deleteMany", {
      params: {
        where: where,
      },
    });
  },
};
