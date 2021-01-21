var saving = 0;
        var list = document.getElementById("expenses");
        
        var expenses = [];

        function Expense (expense, category, dateId) {
            this.expense = expense;
            this.category = category;
            this.dateId = dateId;
        }

        function addIncome() {
            saving += parseInt(document.getElementById("income").value)
           showIncome()
        }

        function showIncome () {
            document.getElementById("currentIncome").innerText = "Saving " + saving
        }

        function addExpense() {
            var expense =  document.getElementById("expense");
            var newDate =  document.getElementById("date");

            var category = document.getElementById("category");
            var newExpense = new Expense(parseInt(expense.value), category.value , newDate.value)

            expenses.push(newExpense)
            saving -= parseInt(expense.value)
            showIncome()
            console.log(expenses)
            renderItem()
        }

        function renderItem () {
            
            var item = "";
            for(var i = 0; i < expenses.length;i++) {
                item += "<li>" + expenses[i].expense + " - " + expenses[i].category + " " + " (" +expenses[i].dateId + " )"  + " " 
                + "<button class='btn btn-secondary one' onclick = 'editItem(this)'>"+"EDIT"+"</button>" + " " +"<button class='btn btn-secondary one' onclick='delItem(this)'>"+ "DELETE"+"</button>" + "</li>"
            }
            list.innerHTML = item
            
        }

        function showFilterExpense() {
            var category = document.getElementById("showExpense").value;

            var item = "";

            for(var i = 0; i < expenses.length;i++) {
                if(category === "all") {
                    item += "<li>" + expenses[i].expense + " - " + expenses[i].category +"</li>"
                } else if(category ===  expenses[i].category) {
                    item += "<li>" + expenses[i].expense + " - " + expenses[i].category +"</li>"
                }
            }
            list.innerHTML = item
        }

        