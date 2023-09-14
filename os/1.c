#include <stdio.h>

int main(void)
{
  /* code */
  int x = 50, y = 30;
  printf("x가 y와 같은가? %d\n", x == y); // 0
  printf("x가 y와 같은가? %d\n", x != y); // 1
  printf("x가 y와 큰가? %d\n", x > y); // 1
  printf("x가 y와 작은가? %d\n", x < y); // 0
  printf("x에 y값을 넣으면 %d\n", x = y); // 30
  if(x == y) 
  {
    //  true
  }
  else
  {
    // false
  }
  return 0;
}
