import { useCallback, useState } from "react";

export function useToggle(initialValue: boolean) {
  const [on, setOn] = useState(initialValue);

  const toggle = useCallback(() => setOn((v) => !v), []);

  return { on, toggle };
}
