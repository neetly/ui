import { useLayoutEffect, useRef, useState } from "react";

type TimeoutId = ReturnType<typeof setTimeout>;

const useTransition = (state: boolean, timeout: number) => {
  const prevStateRef = useRef(state);
  const [isMounted, setMounted] = useState(false);
  const timeoutIdRef = useRef<TimeoutId | null>(null);

  if (state && !isMounted) {
    setMounted(true);
  }

  if (!state && isMounted && timeout === 0) {
    setMounted(false);
  }

  useLayoutEffect(() => {
    if (state !== prevStateRef.current) {
      prevStateRef.current = state;

      if (timeoutIdRef.current !== null) {
        clearTimeout(timeoutIdRef.current);
        timeoutIdRef.current = null;
      }

      if (!state && timeout !== 0) {
        setTimeout(() => {
          setMounted(false);
        }, timeout);
      }
    }
  }, [state, timeout]);

  useLayoutEffect(() => {
    return () => {
      if (timeoutIdRef.current !== null) {
        clearTimeout(timeoutIdRef.current);
        timeoutIdRef.current = null;
      }
    };
  }, []);

  return { isMounted };
};

export { useTransition };
