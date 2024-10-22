/* eslint-disable operator-linebreak */
import { Console } from '@woowacourse/mission-utils';
import splitInputs from './utils/split/splitInputs.js';
import splitCustom from './utils/split/splitCustom.js';
import Calculator from './utils/calculation/calculator.js';
import validateInputs from './utils/validation/validateInputs.js';

const DEFAULT_DELIMETERS = [',', ':'];
class App {
    async run() {
        const inputs = await Console.readLineAsync(
            '문자열 덧셈 계산기를 실행합니다. 계산식을 입력해주세요.\n',
        );
        validateInputs(inputs);
        if (validateInputs(inputs) === true) {
            if (
                inputs.includes('//') === true ||
                inputs.includes('\\n') === true
            ) {
                Console.print(`결과 : ${Calculator(splitCustom(inputs))}`);
            } else if (
                DEFAULT_DELIMETERS.some((delimeter) =>
                    inputs.includes(delimeter),
                )
            ) {
                Console.print(`결과 : ${Calculator(splitInputs(inputs))}`);
            } else if (!isNaN(inputs) && inputs.trim() !== '') {
                Console.print(`결과 : ${inputs}`);
            } else if (inputs.trim() === '') {
                Console.print(`결과 : 0`);
            }
        }
    }
}

export default App;
