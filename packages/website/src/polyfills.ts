import "core-js/features/array/group-by";
import "core-js/features/array/group-by-to-map";

declare global {
  interface Array<T> {
    groupBy<K extends string | symbol>(
      callbackfn: (value: T, index: number, array: T[]) => K,
      thisArg?: unknown,
    ): Record<K, T[]>;

    groupByToMap<K>(
      callbackfn: (value: T, index: number, array: T[]) => K,
      thisArg?: unknown,
    ): Map<K, T[]>;
  }

  interface ReadonlyArray<T> {
    groupBy<K extends string | symbol>(
      callbackfn: (value: T, index: number, array: readonly T[]) => K,
      thisArg?: unknown,
    ): Record<K, T[]>;

    groupByToMap<K>(
      callbackfn: (value: T, index: number, array: readonly T[]) => K,
      thisArg?: unknown,
    ): Map<K, T[]>;
  }
}
