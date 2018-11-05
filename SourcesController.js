
module
    .controller('SourcesController',['$scope',function ($scope) {

        $scope.generateData=function(){
            return {
                sources:{
                    technical:[
                        {description: "функціональні характеристики ПЗ",value:0},
                        {description: "характеристики якості ПЗ",value:0},
                        {description: " характеристики надійності ПЗ",value:0},
                        {description: "застосовність ПЗ",value:0},
                        {description: "часова продуктивність ПЗ",value:0},
                        {description: "супроводжуваність ПЗ",value:0},
                        {description: "повторне використання компонент ПЗ",value:0}
                    ],
                    costal:[
                        {description:'обмеження сумарного бюджету на програмний проект',value:0},
                        {description:'недоступна вартість реалізації програмного проекту',value:0},
                        {description:'низька ступінь реалізму при оцінюванні витрат на програмний проект',value:0}
                    ]
                    ,
                    planed:[
                        {description:'властивості та можливості гнучкості внесення змін до планів життєвого циклу розроблення ПЗ',value:0},
                        {description:'можливості порушення встановлених термінів реалізації етапів життєвого циклу розроблення ПЗ',value:0},
                        {description:'низька ступінь реалізму при встановленні планів і етапів життєвого циклу розроблення ПЗ',value:0}
                    ]
                    ,
                    release:[
                        {description:'  хибна стратегія реалізації програмного проекту',value:0},
                        {description:' неефективне планування проекту розроблення ПЗ',value:0},
                        {description:' неякісне оцінювання програмного проекту',value:0},
                        {description:'  прогалини в документуванні етапів реалізації програмного проекту',value:0},
                        {description:'  промахи в прогнозуванні результатів реалізації програмного проекту',value:0}
                    ]
                },
                events:{
                    technical:[
                        {description: " затримки у постачанні обладнання, необхідного для підтримки процесу розроблення ПЗ;",value:0,cost:0},
                        {description: "затримки у постачанні інструментальних засобів, необхідних для підтримки процесу розроблення ПЗ;",value:0,cost:0},
                        {description: "небажання команди виконавців використовувати інструментальні засоби для підтримки процесу розроблення ПЗ;",value:0,cost:0},
                        {description: " формування запитів на більш потужні інструментальні засоби розроблення ПЗ;",value:0,cost:0},
                        {description: " відмова команди виконавців від CASE-засобів розроблення ПЗ;",value:0,cost:0},
                        {description: "неефективність програмного коду, згенерованого CASE-засобами розроблення ПЗ;",value:0,cost:0},
                        {description: "неможливість інтеграції CASE-засобів з іншими інструментальними засобами для підтримки процесу розроблення ПЗ;",value:0,cost:0},
                        {description: " недостатня продуктивність баз(и) даних для підтримки процесу розроблення ПЗ;",value:0,cost:0},
                        {description: " програмні компоненти, які використовують повторно в ПЗ, мають дефекти та обмежені функціональні можливості;",value:0,cost:0},
                        {description: " швидкість виявлення дефектів у програмному коді є нижчою від раніше запланованих термінів;",value:0,cost:0},
                        {description: " поява дефектних системних компонент, які використовують для розроблення ПЗ;",value:0,cost:0}


                    ],
                    costal:[
                        {description: "  недо(пере)оцінювання витрат на реалізацію програмного проекту (надмірно низька вартість);",value:0,cost:0},
                        {description: " фінансові ускладнення у компанії-замовника ПЗ;",value:0,cost:0},
                        {description: "фінансові ускладнення у компанії-розробника ПЗ;",value:0,cost:0},
                        {description: "змен(збіль)шення бюджету програмного проекта з ініціативи компанії-замовника ПЗ під час його реалізації;",value:0,cost:0},
                        {description: "висока вартість виконання повторних робіт, необхідних для зміни вимог до ПЗ;",value:0,cost:0},
                        {description: "реорганізація структурних підрозділів у компанії-замовника ПЗ;",value:0,cost:0},
                        {description: "реорганізація команди виконавців у компанії-розробника ПЗ;",value:0,cost:0}


                    ]
                    ,
                    planed:[
                        {description: "зміни графіка виконання робіт з боку замовника чи розробника ПЗ;",value:0,cost:0},
                        {description: "порушення графіка виконання робіт з боку компанії-розробника ПЗ;",value:0,cost:0},
                        {description: "потреба зміни користувацьких вимог до ПЗ з боку компанії-замовника ПЗ;",value:0,cost:0},
                        {description: "потреба зміни функціональних вимог до ПЗ з боку компанії-розробника ПЗ;",value:0,cost:0},
                        {description: "потреба виконання великої кількості повторних робіт, необхідних для зміни вимог до ПЗ;",value:0,cost:0},
                        {description: "недо(пере)оцінювання тривалості етапів реалізації програмного проекту з боку компанії-замовника ПЗ;",value:0,cost:0},
                        {description: "остаточний розмір ПЗ значно перевищує (менший від) заплановані(их) його характеристики;",value:0,cost:0},
                        {description: "поява на ринку аналогічного ПЗ до виходу замовленого;",value:0,cost:0},
                        {description: "поява на ринку більш конкурентоздатного ПЗ;",value:0,cost:0}

                    ]
                    ,
                    release:[
                        {description: "низький моральний стан персоналу команди виконавців ПЗ;",value:0,cost:0},
                        {description: "низька взаємодія між членами команди виконавців ПЗ;",value:0,cost:0},
                        {description: "пасивність керівника (менеджера) програмного проекту;",value:0,cost:0},
                        {description: "недостатня компетентність керівника (менеджера) програмного проекту;",value:0,cost:0},
                        {description: "незадоволеність замовника результатами етапів реалізації програмного проекту;",value:0,cost:0},
                        {description: "недостатня кількість фахівців у команді виконавців ПЗ з необхідним професійним рівнем;",value:0,cost:0},
                        {description: "хвороба провідного виконавця в найкритичніший момент розроблення ПЗ;",value:0,cost:0},
                        {description: "одночасна хвороба декількох виконавців підчас розроблення ПЗ;",value:0,cost:0},
                        {description: " неможливість організації необхідного навчання персоналу команди виконавців ПЗ;",value:0,cost:0},
                        {description: "зміна пріоритетів у процесі управління програмним проектом;",value:0,cost:0},
                        {description: "недо(пере)оцінювання необхідної кількості розробників (підрядників і субпідрядників) на етапах життєвого циклу розроблення ПЗ;",value:0,cost:0},
                        {description: "недостатнє (надмірне) документування результатів на етапах реалізації програмного проекту;",value:0,cost:0},
                        {description: "нереалістичне прогнозування результатів на етапах реалізації програмного проекту;",value:0,cost:0},
                        {description: " недостатній професійний рівень представників від компанії-замовника ПЗ.",value:0,cost:0}

                    ]
                },
                eksperts:[

                    {
                        technical:{
                            posibility:{
                                coeficient: 10,
                                marks: [0, 0 , 0, 0, 0, 0, 0, 0, 0, 0,0]
                            },
                            importance:{
                                coeficient: 10,

                                marks: [0, 0 , 0, 0, 0, 0, 0, 0, 0, 0,0]
                            }
                        },
                        costal:{
                            posibility:{
                                coeficient: 10,
                                marks: [0, 0, 0, 0, 0, 0, 0]
                            },
                            importance:{
                                coeficient: 10,
                                marks: [0, 0, 0, 0, 0, 0, 0]
                            }
                        },
                        planed:{
                            posibility:{
                                coeficient: 10,
                                marks: [0, 0, 0, 0, 0, 0, 0, 0, 0]
                            },
                            importance:{
                                coeficient: 10,
                                marks: [0, 0, 0, 0, 0, 0, 0, 0, 0]
                            }
                        },
                        release:{
                            posibility:{
                                coeficient: 10,
                                marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                            },
                            importance:{
                                coeficient: 10,
                                marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                            }
                        }
                    },
                    {
                        technical:{
                            posibility:{
                                coeficient: 10,
                                marks: [0, 0 , 0, 0, 0, 0, 0, 0, 0, 0,0]
                            },
                            importance:{
                                coeficient: 10,

                                marks: [0, 0 , 0, 0, 0, 0, 0, 0, 0, 0,0]
                            }
                        },
                        costal:{
                            posibility:{
                                coeficient: 10,
                                marks: [0, 0, 0, 0, 0, 0, 0]
                            },
                            importance:{
                                coeficient: 10,
                                marks: [0, 0, 0, 0, 0, 0, 0]
                            }
                        },
                        planed:{
                            posibility:{
                                coeficient: 10,
                                marks: [0, 0, 0, 0, 0, 0, 0, 0, 0]
                            },
                            importance:{
                                coeficient: 10,
                                marks: [0, 0, 0, 0, 0, 0, 0, 0, 0]
                            }
                        },
                        release:{
                            posibility:{
                                coeficient: 10,
                                marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                            },
                            importance:{
                                coeficient: 10,
                                marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                            }
                        }
                    },
                    {
                        technical:{
                            posibility:{
                                coeficient: 10,
                                marks: [0, 0 , 0, 0, 0, 0, 0, 0, 0, 0,0]
                            },
                            importance:{
                                coeficient: 10,

                                marks: [0, 0 , 0, 0, 0, 0, 0, 0, 0, 0,0]
                            }
                        },
                        costal:{
                            posibility:{
                                coeficient: 10,
                                marks: [0, 0, 0, 0, 0, 0, 0]
                            },
                            importance:{
                                coeficient: 10,
                                marks: [0, 0, 0, 0, 0, 0, 0]
                            }
                        },
                        planed:{
                            posibility:{
                                coeficient: 10,
                                marks: [0, 0, 0, 0, 0, 0, 0, 0, 0]
                            },
                            importance:{
                                coeficient: 10,
                                marks: [0, 0, 0, 0, 0, 0, 0, 0, 0]
                            }
                        },
                        release:{
                            posibility:{
                                coeficient: 10,
                                marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                            },
                            importance:{
                                coeficient: 10,
                                marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                            }
                        }
                    },
                    {
                        technical:{
                            posibility:{
                                coeficient: 10,
                                marks: [0, 0 , 0, 0, 0, 0, 0, 0, 0, 0,0]
                            },
                            importance:{
                                coeficient: 10,

                                marks: [0, 0 , 0, 0, 0, 0, 0, 0, 0, 0,0]
                            }
                        },
                        costal:{
                            posibility:{
                                coeficient: 10,
                                marks: [0, 0, 0, 0, 0, 0, 0]
                            },
                            importance:{
                                coeficient: 10,
                                marks: [0, 0, 0, 0, 0, 0, 0]
                            }
                        },
                        planed:{
                            posibility:{
                                coeficient: 10,
                                marks: [0, 0, 0, 0, 0, 0, 0, 0, 0]
                            },
                            importance:{
                                coeficient: 10,
                                marks: [0, 0, 0, 0, 0, 0, 0, 0, 0]
                            }
                        },
                        release:{
                            posibility:{
                                coeficient: 10,
                                marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                            },
                            importance:{
                                coeficient: 10,
                                marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                            }
                        }
                    },
                    {
                        technical:{
                            posibility:{
                                coeficient: 10,
                                marks: [0, 0 , 0, 0, 0, 0, 0, 0, 0, 0,0]
                            },
                            importance:{
                                coeficient: 10,

                                marks: [0, 0 , 0, 0, 0, 0, 0, 0, 0, 0,0]
                            }
                        },
                        costal:{
                            posibility:{
                                coeficient: 10,
                                marks: [0, 0, 0, 0, 0, 0, 0]
                            },
                            importance:{
                                coeficient: 10,
                                marks: [0, 0, 0, 0, 0, 0, 0]
                            }
                        },
                        planed:{
                            posibility:{
                                coeficient: 10,
                                marks: [0, 0, 0, 0, 0, 0, 0, 0, 0]
                            },
                            importance:{
                                coeficient: 10,
                                marks: [0, 0, 0, 0, 0, 0, 0, 0, 0]
                            }
                        },
                        release:{
                            posibility:{
                                coeficient: 10,
                                marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                            },
                            importance:{
                                coeficient: 10,
                                marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                            }
                        }
                    }

                ]

            };
        };
        $scope.data=$scope.generateData();
        $scope.files;
        $scope.saveClickHandler=function(){
            let request=fetch('save.php', {
                method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: document.getElementById('filename').value+'&' + JSON.stringify($scope.data)
            }).then(function(data) {
                let filenameNode= document.getElementById('filename');
                alert("Project "+filenameNode.value+" is saved");
                filenameNode.value="";
            }).catch(function(error) {
                console.log(error);
            });
        };
        $scope.openClickHandler=function(){
            fetch('getfiles.php')
                .then(function (response) {
                    response.json().then(function (data) {
                        let files=data.splice(2);
                        $scope.files=files;
                        $scope.$apply();
                    })
                })

        };
        $scope.openFile=function(){
            let string=this.file;
            fetch('/projects/'+this.file).then(function (response) {
                response.json().then(function (data) {
                    $scope.data=data;
                    $scope.$apply();
                    let a =document.getElementById('tables');
                    a.style.display='block';
                    a=document.getElementById("filename");
                    a.value=string;
                })
            });

        };
        $scope.newClickHandler=function (){
          $scope.data=$scope.generateData();
          let a =document.getElementById('tables');
          a.style.display='block';
        };

      /*   $scope.additionalData={
            sourses:{
                technical :{
                    sum: 0
                },
                costal:{
                    sum:0
                }
                ,
                planed:{
                    sum:0
                }
                ,
                release:{
                    sum:0
                }
            },
             events:{
                 technical :{
                     sum: 0
                 },
                 costal:{
                     sum:0
                 }
                 ,
                 planed:{
                     sum:0
                 }
                 ,
                 release:{
                     sum:0
                 }
             }
         };*/
         $scope.changeSources=function (what) {
            let sum=0;
             for (let val of $scope.data.sources[what]){
               sum+=val.value;
             }
  //           $scope.additionalData.sourses[what].sum=sum;
             return sum;
         };
        $scope.getSumOfCosts=function (what) {
            let sum=0;
            for (let val of $scope.data.events[what]){
                sum+=val.cost;
            }
            //           $scope.additionalData.sourses[what].sum=sum;
            return sum;
        };
        $scope.changeEvents=function (what) {
            let sum=0;
            for (let val of $scope.data.events[what]){
                sum+=val.value;
            }
           // $scope.additionalData.events[what].sum=sum;

            return sum;
        };
        $scope.getSumOfCoeficients=function (type,table) {


                let sum=0;

                for (let it of $scope.data.eksperts){
                    sum+=it[type][table].coeficient;
                }
                return sum;


        };
        $scope.getAvgOfMarks=function (type,table,index) {


            let sum=0;

            for (let it of $scope.data.eksperts){
               sum +=it[type][table].marks[index];
            }
            return (sum/$scope.data.eksperts.length).toFixed(2);


        };
        $scope.getAvgOfOneExpertMarks=function (type,table,index) {


            let sum=0;

            for (let it of $scope.data.eksperts[index][type][table].marks){
                sum +=it;
            }
            return (sum/$scope.data.eksperts[index][type][table].marks.length).toFixed(2);


        };
        $scope.getAvgExpertsMark=function (type,table) {


            let sum=0;
            for (let index in $scope.data.eksperts){
                sum+=+$scope.getAvgOfOneExpertMarks(type,table,index);
            }
            return (sum/$scope.data.eksperts.length).toFixed(2);


        };
        $scope.getAllAverage=function (type,table,index) {
            let sum=0;
            for (let ekspert of $scope.data.eksperts) {
                sum+=ekspert[type][table].marks[index] * ekspert[type][table].coeficient
            }
            return sum/$scope.getSumOfCoeficients(type,table);
        };

        $scope.getString=function (type,table,index){
            let level =$scope.getAllAverage(type,table,index).toFixed(2);
            if (level<=0.1) return'Дуже низький';
            if (level>0.1&&level<=0.25) return'Низький';
            if (level>0.25&&level<=0.5) return'Середній';
            if (level>0.5&&level<=0.75) return'Високий';
            if (level>0.75) return'Дуже високий';
        };
        $scope.getSumOfNewCosts=function (type,table) {
        let sum=0;
        for (let [index,row] of $scope.data.events[type].entries()){
          sum+=row.cost*($scope.getAllAverage(type,table,index));
        }
        return sum;
        };
        $scope.getSumOfWholeCosts=function (type,table) {
            let sum=0;
            for (let [index,row] of $scope.data.events[type].entries()){
                sum+=(row.cost*($scope.getAllAverage(type,table,index))+row.cost);
            }
            return sum;
        };
        $scope.aditionaltable=[

            " попереднє навчання членів проектного колективу;",
            " узгодження детального переліку вимог до ПЗ із замовником;",
            " внесення узгодженого переліку вимог до ПЗ замовника в договір;",
            " точне слідування вимогам замовника з узгодженого переліку вимог до ПЗ;",
            " попередні дослідження ринку;",
            " експертна оцінка програмного проекту досвідченим стороннім консультантом;",
            " консультації досвідченого стороннього консультанта;",
            " тренінг з вивчення необхідних інструментів розроблення ПЗ;",
            " укладання договору страхування;",
            " використання шаблонних рішень з вдалих попередніх проектів при управлінні програмним проектом;",
            " підготовка документів, які показують важливість даного проекту для досягнення фінансових цілей компанії-розробника;",
            " реорганізація роботи проектного колективу так, щоб обов'язки та робота членів колективу перекривали один одного;",
            " придбання (замовлення) частини компонент розроблюваного ПЗ;",
            " заміна потенційно дефектних компонент розроблюваного ПЗ придбаними компонентами, які гарантують якість виконання роботи;",
            " придбання більш продуктивної бази даних;",
            "  використання генератора програмного коду;",
            "  реорганізація роботи проектного колективу залежно від рівня труднощів виконання завдань та професійних рівнів розробників;",
        " повторне використання придатних компонент ПЗ, які були розроблені для інших програмних проектів;",
            " аналіз доцільності розроблення даного ПЗ."

    ]

    }]);