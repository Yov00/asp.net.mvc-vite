import { makeObservable, runInAction } from "mobx";

interface IPart {
  id: number;
  name: string;
}
export class TestStore {
  parts: IPart[] = [];
  constructor() {
    makeObservable(this);
  }

  addParts = (data: IPart) => {
    runInAction(() => {
      this.parts = [...this.parts, data];
    });
  };

  removePart = (_id: number) => {
    if (_id > 0) {
      runInAction(() => {
        this.parts = this.parts.filter((p) => p.id != _id);
      });
    }
  };
}
