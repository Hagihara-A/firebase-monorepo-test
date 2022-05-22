export type Account = {
  name: string;
  age: number;
};

export type Schema = {
  accouts: {
    [Dockey: string]: {
      doc: Account;
    };
  };
};
