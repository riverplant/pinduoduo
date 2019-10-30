import { Pipe, PipeTransform } from '@angular/core';
import { interval } from 'rxjs';
/**
 *自定义一个管道:计算时间差
 */
@Pipe({name: 'appAgo'})
export class AgoPipe implements PipeTransform {
    transform(value: any): any {
        
        if(value){
            //+new Date() 将日期格式通过'+' 转换成时间戳,用来计算.单位是毫秒
            const second = Math.floor((+new Date() - +new Date(value))/1000);//转换成秒
            if(second < 30 ){
                return 'just';
            }
            /**
             * 时间字典
             */
            const intervals = {
                year: 3600*24*365,
                month: 3600*24*30,
                week: 3600*24*7,
                day: 3600*24,
                hour: 3600,
                minute: 60,
                second:1
            }

            let counter = 0;
            for(const unitName in intervals) {
                    if(intervals.hasOwnProperty(unitName)){
                        const unitValue = intervals[unitName];counter = Math.floor(second / unitValue);
                        if(counter > 0){
                            return `${counter} ${unitName} last`;
                        }
                    }
            }
        }
        return value;
    }
}