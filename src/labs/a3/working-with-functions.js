import ArrowFunctions from './arrow-functions';
import ES5Functions from './es5-functions';
import ImpliedReturn from './implied-return';
import FunctionParenthesisAndParameters from './function-paranthesis-and-parameters.js'

function WorkingWithFunctions() {
    return(
        <div>
            <h1> Working With Functions </h1>
            <ES5Functions/>
            <ArrowFunctions/>
            <ImpliedReturn/>
            <FunctionParenthesisAndParameters/>
        </div>
    )
}

export default WorkingWithFunctions;