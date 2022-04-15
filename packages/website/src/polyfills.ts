import "array.prototype.groupby/auto";
import "array.prototype.groupbytomap/auto";

declare global {
  interface Array<T> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    groupBy<K extends keyof any>(
      callbackfn: (value: T, index: number, array: T[]) => K,
      thisArg?: unknown,
    ): Record<K, T[]>;

    groupByToMap<K>(
      callbackfn: (value: T, index: number, array: T[]) => K,
      thisArg?: unknown,
    ): Map<K, T[]>;
  }

  interface ReadonlyArray<T> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    groupBy<K extends keyof any>(
      callbackfn: (value: T, index: number, array: readonly T[]) => K,
      thisArg?: unknown,
    ): Record<K, T[]>;

    groupByToMap<K>(
      callbackfn: (value: T, index: number, array: readonly T[]) => K,
      thisArg?: unknown,
    ): Map<K, T[]>;
  }
}
