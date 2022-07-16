import "core-js/modules/esnext.array.group-by";
import "core-js/modules/esnext.array.group-by-to-map";

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
