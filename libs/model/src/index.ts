export type Account = {
  name: string;
  age: number;
};

export type Schema = {
  accounts: {
    [Dockey: string]: {
      doc: Account;
    };
  };
};
