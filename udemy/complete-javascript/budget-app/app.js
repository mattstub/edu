// BUDGET CONTROLLER
var budgetController = (function () {
    // Expense constructor
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };
    Expense.prototype.calcPercentage = function (totalIncome) {
        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    };
    Expense.prototype.getPercentage = function () {
        return this.percentage;
    };
    // Income constructor
    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var calculateTotal = function (type) {
        var sum = 0;
        data.allItems[type].forEach(function (cur) {
            sum += cur.value;
        });
        data.totals[type] = sum;
    };
    // Data structure to handle all incomes, expenses and totals
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };
    return {
        addItem: function (type, des, val) {
            var newItem, ID;
            // Create new ID based on the value of the last ID in the array being used
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            // Create new item in data structure based on the item type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            // Insert item into the necessary array
            data.allItems[type].push(newItem);
            return newItem;
        },
        deleteItem: function (type, id) {
            var ids, index;
            ids = data.allItems[type].map(function (current) {
                return current.id;
            });
            index = ids.indexOf(id);
            if (index >= 0) {
                data.allItems[type].splice(index, 1);
            }
        },
        calculateBudget: function () {
            // Calculate Total Income & Expenses
            calculateTotal('exp');
            calculateTotal('inc');
            // Calculate the Budget (Income-Expenses)
            data.budget = data.totals.inc - data.totals.exp;
            // Calculate the Percentage Spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
        },
        calculatePercentages: function () {
            data.allItems.exp.forEach(function (cur) {
                cur.calcPercentage(data.totals.inc);
            });
        },
        getBudget: function () {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        },
        getPercentages: function () {
            var allPerc = data.allItems.exp.map(function (cur) {
                return cur.getPercentage();
            });
            return allPerc;
        },
        testing: function () {
            console.log(data);
        }
    };
})();


// UI CONTROLLER
var UIController = (function () {
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };
    var formatNumber = function (num, type) {
        var numSplit, int, dec;
        num = Math.abs(num);
        num = num.toFixed(2);
        numSplit = num.split('.');
        int = numSplit[0];
        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, int.length);
        }
        dec = numSplit[1];
        return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;
    };
    var nodeListForEach = function (list, callback) {
        for (var count = 0; count < list.length; count++) {
            callback(list[count], count);
        };
    };
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // INC (+) or EXP (-)
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            }
        },
        addListItem: function (obj, type) {
            var html, newHtml, element;
            // Create HTML string with placeholder text
            if (type === 'inc') {
                // ability to simplify code and not write another IF statement to handle the insert
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-**ID**"><div class="item__description">**DESCRIPTION**</div><div class="right clearfix"><div class="item__value">**VALUE**</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                // ability to simplify code and not write another IF statement to handle the insert
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="exp-**ID**"><div class="item__description">**DESCRIPTION**</div><div class="right clearfix"><div class="item__value">**VALUE**</div><div class="item__percentage">**PERCENTAGE**</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            // Replace placeholder text with actual data
            newHtml = html.replace('**ID**', obj.id);
            newHtml = newHtml.replace('**DESCRIPTION**', obj.description);
            newHtml = newHtml.replace('**VALUE**', formatNumber(obj.value, type));
            newHtml = newHtml.replace('**PERCENTAGE**', obj.percentage);
            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        deleteListItem: function (selectorID) {
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        },
        clearFields: function () {
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue);
            fieldsArr = Array.prototype.slice.call(fields);
            // Loop through the array and clear the input fields
            fieldsArr.forEach(function (current, index, array) {
                current.value = '';
            });
            // Focus back on beginning of array
            fieldsArr[0].focus();
        },
        displayBudget: function (obj) {
            var type;
            obj.budget > 0 ? type = 'inc' : type = 'exp';
            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp;
            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = '--';
            }
        },
        displayPercentages: function (percentages) {
            var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);
            nodeListForEach(fields, function (current, index) {
                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '--';
                }
            });
        },
        displayMonth: function() {
            var now, year, month, months;
            now = new Date();
            year = now.getFullYear();
            month = now.getMonth();
            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;
        },
        changedType: function() {
            var fields = document.querySelectorAll(
                DOMstrings.inputType + ',' +
                DOMstrings.inputDescription + ',' +
                DOMstrings.inputValue);
            nodeListForEach(fields, function(cur) {
                cur.classList.toggle('red-focus');
            });
            document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
        },
        getDOMstrings: function () {
            return DOMstrings;
        }
    }
})();


// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {
    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);
    };
    var updateBudget = function () {
        // Calculate the budget
        budgetCtrl.calculateBudget();
        // Return the budget
        var budget = budgetCtrl.getBudget();
        // Display the budget on the User Interface
        UICtrl.displayBudget(budget);
    };
    var updatePercentages = function () {
        // Calculate the percentages
        budgetCtrl.calculatePercentages();
        // Read the percentages from budget controller
        var percentages = budgetCtrl.getPercentages();
        // Update the user interface with new percentages
        UICtrl.displayPercentages(percentages);
    };
    var ctrlAddItem = function () {
        var input, newItem;
        // Get Input Data from Field
        input = UICtrl.getInput();
        if (input.description !== '' && !isNaN(input.value) && input.value > 0) {
            // Add Item to Budget Controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            // Add new item to User Interface
            UICtrl.addListItem(newItem, input.type);
            // Clear the Fields
            UICtrl.clearFields();
            // Calculate & Update Budget
            updateBudget();
            // Calculate & Update Percentages
            updatePercentages();
        }
    };
    var ctrlDeleteItem = function (event) {
        var itemID, splitID, type, ID;
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if (itemID) {
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);
            // Delete the item from the data structure
            budgetCtrl.deleteItem(type, ID);
            // Delete the item from the user interface
            UICtrl.deleteListItem(itemID);
            // Update and show the new budget
            updateBudget();
            // Calculate & Update Percentages
            updatePercentages();
        }
    };
    return {
        init: function () {
            console.log('Application has started');
            UICtrl.displayMonth();
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            })
            setupEventListeners();
        }
    };
})(budgetController, UIController);
controller.init();
