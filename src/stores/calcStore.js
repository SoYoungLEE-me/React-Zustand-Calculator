import { create } from "zustand";
import { evaluate as mathEvaluate } from "mathjs";

const calcStore = create((set) => ({
  expression: "", //화면에 표시될 식

  // 숫자 또는 연산자 추가
  append: (value) =>
    set((state) => {
      // Error 상태면 새로 입력 시작
      if (state.expression === "Error") {
        return { expression: value };
      }
      return { expression: state.expression + value };
    }),

  //초기화
  clear: () => set({ expression: "", result: "" }),

  backspace: () =>
    set((state) => ({ expression: state.expression.slice(0, -1) })),

  evaluate: () =>
    set((state) => {
      try {
        const sanitized = state.expression
          .replace(/×/g, "*")
          .replace(/÷/g, "/"); //곱하기와 나누기, 제곱 계산 기호를 바꿔주기
        const evalResult = mathEvaluate(sanitized);
        return {
          expression: evalResult.toString(),
        };
      } catch {
        return { expression: "Error" };
      }
    }),
}));

export default calcStore;
