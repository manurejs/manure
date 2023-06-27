class IdManager {
  private static instance: IdManager;
  private counts: Record<string, number | undefined>;

  private constructor() {
    this.counts = {};
  }

  public static getInstance(): IdManager {
    if (!IdManager.instance) {
      IdManager.instance = new IdManager();
    }
    return IdManager.instance;
  }

  public getId(name: string) {
    if (this.counts[name] === undefined) {
      this.counts[name] = 1;
      return `${name}-${0}`;
    } else {
      this.counts[name]++;
      return `${name}-${this.counts[name] - 1}`;
    }
  }

  public clear() {
    this.counts = {};
  }
}

export { IdManager };
