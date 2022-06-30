import React from "react";
import { useState } from "react";
import "./Bujet.css";
const Bujet = () => {
  const [input, setinput] = useState({ name: "", amount: 0, dropdown: "inc" });
  const [income, setincome] = useState([]);
  const [expanses, setexpenses] = useState([]);
  const [totalincome, setetotalincome] = useState(0);
  const [totalexp, setetotalexp] = useState(0);
  const handlechange = (e) => {
    setinput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (input.dropdown === "inc") {
        setincome([...income, input]);
        setetotalincome((pr) => pr + +input.amount);
      } else {
        setexpenses([...expanses, input]);
        setetotalexp((pr) => pr + +input.amount);
      }
      setinput({ ...input, name: "", amount: "" });
    }
  };
  return (
    <div>
      <div class="top">
        <div class="budget">
          <div class="budgetTitle">
            Available Budget in <span class="budgetTitle--month">%Month%</span>:
          </div>
          <div class="budgetValue">{totalincome - totalexp}</div>
          <div class="budgetIncome clearfix">
            <div class="budgetIncome--text">Income</div>
            <div class="right">
              <div class="budgetIncome--value">+ {totalincome}.00</div>
              <div class="budgetIncome--percentage">&nbsp;</div>
            </div>
          </div>
          <div class="budgetExpenses clearfix">
            <div class="budgetExpenses--text">Expenses</div>
            <div class="right clearfix">
              <div class="budgetExpenses--value">- {totalexp}.00</div>
              <div class="budgetExpenses--percentage">
                {" "}
                {(totalexp / totalincome) * 100}%
              </div>
            </div>
          </div>
        </div>
        <div class="bottom1">
        <div class="add">
          <div class="addContainer">
            <select class="addType" name="dropdown" onChange={handlechange}>
              <option value="inc" selected>
                +
              </option>
              <option value="exp">-</option>
            </select>
            <input
              type="text"
              class="addDescription"
              placeholder="Add description"
              value={input.name}
              name="name"
              onChange={handlechange}
            />
            <input
              type="number"
              class="addValue"
              placeholder="Value"
              name="amount"
              onKeyDown={handleKeyDown}
              value={input.amount}
              onChange={handlechange}
            />
            <button class="addBtn">
              <i class="ion-ios-checkmark-outline"></i>
            </button>
          </div>
        </div>
        <div className="shift">
          <div class="income">
            <h2 class="icomeTitle">Income:</h2>
            <div class="incomeList">
              {income.map((e, i) => {
                return (
                  <div class="item clearfix" id="income-0" key={i}>
                    <div class="item__description">{e.name}</div>
                    <div class="right clearfix">
                      <div class="item__value">+{e.amount}.00</div>
                      <div class="item__delete">
                        <button class="item__delete--btn">
                          <i class="ion-ios-close-outline"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div class="expenses">
            <h2 class="expensesTitle">Expenses</h2>
            <div class="expensesList">
              {expanses.map((e, i) => {
                return (
                  <div class="item clearfix" id="expense-0" key={i}>
                    <div class="item__description">{e.name}</div>
                    <div class="right clearfix">
                      <div class="item__value">- {e.amount}.00</div>
                      <div class="item__percentage">
                        {(100 * Number(e.amount)) / totalincome}%
                      </div>
                      <div class="item__delete">
                        <button class="item__delete--btn">
                          <i class="ion-ios-close-outline"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
        
      </div>
     
    </div>
  );
};

export default Bujet;
