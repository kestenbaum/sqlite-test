declare module "connect-sqlite3" {
  import { Store } from "express-session";
  import { SessionOptions } from "express-session";

  interface SQLiteStoreOptions {
    table?: string;
    db?: string;
    dir?: string;
  }

  function SQLiteStore(session: (options?: SessionOptions) => any): new (options?: SQLiteStoreOptions) => Store;

  export = SQLiteStore;
}
