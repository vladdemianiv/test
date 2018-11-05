module
    .controller('tablecontroller2',['$scope',function ($scope) {
        $scope.sumfortable1=document.querySelectorAll("#div2 .table1 tbody tr input[checked]").length;
        $scope.changehandler1=function(){
            $scope.Inputs=document.querySelectorAll("#div2 .table1 tbody tr input")
            $scope.sumfortable1=0;
            for(let el of $scope.Inputs){
                if(el.checked)$scope.sumfortable1++;
            }

        }
        $scope.sumfortable2=document.querySelectorAll("#div2 .table2 tbody tr input[checked]").length;
        $scope.changehandler2=function(){
            $scope.Inputs=document.querySelectorAll("#div2 .table2 tbody tr input")
            $scope.sumfortable2=0;
            for(let el of $scope.Inputs){
                if(el.checked)$scope.sumfortable2++;
            }

        }
        $scope.sumfortable3=document.querySelectorAll("#div2 .table3 tbody tr input[checked]").length;
        $scope.changehandler3=function(){
            $scope.Inputs=document.querySelectorAll("#div2 .table3 tbody tr input")
            $scope.sumfortable3=0;
            for(let el of $scope.Inputs){
                if(el.checked)$scope.sumfortable3++;
            }

        }
        $scope.sumfortable3=document.querySelectorAll("#div2 .table3 tbody tr input[checked]").length;
        $scope.changehandler3=function(){
            $scope.Inputs=document.querySelectorAll("#div2 .table3 tbody tr input")
            $scope.sumfortable3=0;
            for(let el of $scope.Inputs){
                if(el.checked)$scope.sumfortable3++;
            }

        }
        $scope.sumfortable4=document.querySelectorAll("#div2 .table4 tbody tr input[checked]").length;
        $scope.changehandler4=function(){
            $scope.Inputs=document.querySelectorAll("#div2 .table4 tbody tr input")
            $scope.sumfortable4=0;
            for(let el of $scope.Inputs){
                if(el.checked)$scope.sumfortable4++;
            }

        }
    }]);