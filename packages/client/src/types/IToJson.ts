export type IToJson<T> = T extends {toJSON(): infer U}
  ? U
  : T extends object
    ? {
      [k in keyof T]: IToJson<T[k]>;
    }
    : T;
