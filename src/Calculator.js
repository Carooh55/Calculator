import React from "react";
import "./Calculator";

export default function Calculator() {
  return (
    <div className="container">
      <div className="calculator">
        <form>
          <div className="display">
            <input type="text" placeholder="0" name="display" />
          </div>
          <div>
            <input
              type="button"
              value="CA"
              onclick="display.value='' "
              className="operator"
            />
            <input
              type="button"
              value="DE"
              onclick="display.value=display.value.toString().slice(0,-1)"
              classsName="operator"
            />
            <input
              type="button"
              value="%"
              onclick="display.value+='%'"
              className="operator"
            />
            <input
              type="button"
              value="/"
              onclick="display.value+='/'"
              className="operator"
            />
          </div>
          <div>
            <input type="button" value="9" onclick="display.value+='9'" />
            <input type="button" value="8" onclick="display.value+='8'" />
            <input type="button" value="7" onclick="display.value+='7'" />
            <input
              type="button"
              value="*"
              onclick="display.value+='*'"
              className="operator"
            />
          </div>
          <div>
            <input type="button" value="6" onclick="display.value+='6'" />
            <input type="button" value="5" onclick="display.value+='5'" />
            <input type="button" value="4" onclick="display.value+='4'" />
            <input
              type="button"
              value="-"
              onclick="display.value+='-'"
              className="operator"
            />
          </div>
          <div>
            <input type="button" value="3" onclick="display.value+='3'" />
            <input type="button" value="2" onclick="display.value+='2'" />
            <input type="button" value="1" onclick="display.value+='1'" />
            <input
              type="button"
              value="+"
              onclick="display.value+='+'"
              className="operator"
            />
          </div>
          <div>
            <input type="button" value="0" onclick="display.value+='0'" />
            <input
              type="button"
              value="."
              onclick="display.value+='.'"
              className="operator"
            />
            <input
              type="button"
              value=","
              onclick="display.value+=','"
              className="operator"
            />
            <input
              type="button"
              value="="
              onclick="
              try{
              display.value =eval(display.value.replace(/(\d+\.?d*) %/g, '($1/100)'));
              }catch (e){
              display.value='Error'
              }
              "
              className="operator equal"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
