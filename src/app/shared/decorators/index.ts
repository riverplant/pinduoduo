export function Emoji() {
    return (target: object, key: string) => {
      let val = target[key];
      const getter = () => {
         return val;
      }

      const setter = (value: string) => {
          val = '@'+value+'@'
      }
      Object.defineProperty(target, key,{
          get: getter,
          set: setter,
          enumerable: true,
          configurable: true
      });
    }
}

export function Confirmable( message:string){

    return (target: object, key: string , descriptor: PropertyDescriptor) => {
        const original = descriptor.value; //代表本身要执行的函数handleClick
        descriptor.value = function(...args:any){
            const allow = window.confirm(message);
            if(allow){
                const result = original.apply(args);
                return result;
            }
                   return null;
        }
        return descriptor;
      }
     
  } 
  /**
   * <div [ngSwitch]="conditionExpression">
   * <ng-template [ngSwitchCase]="case1Exp">...</nb-template>
   * <ng-template ngSwitchCase="case2LiteralString">...</nb-template>
   * <ng-template ngSwitchDefault">...</nb-template>
   * </div>
   */