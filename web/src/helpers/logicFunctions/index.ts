import { getThemeProps } from "@material-ui/styles";

export const getNoFibonacciNumber = (n: number): number => {
  let n1 = 0, n2 = 1, n3 = 2;
  let resultado = 0;

  while(n > 0){
    n1 = n2;  n2 = n3; n3 = n1+n3;
    n = n - (n3-n2-1);
  }

  resultado = n2 + (n + (n3-n2-1));
  return resultado;
};
