# Angular Events


## Custom Events -- Sharing Data Between Controllers

#### How to raise/  Notify/ Publish/ Produce Event
    
    $broadcast : When ever a event broadcasted in one controller scope it checks for the event receiver $on() in its own scope and all the child, nested controllers of the current controller scope.
    Executed from TOP to BOTTOM

        $scope.$broadcast("eventName", { data: data });
        $rootScope.$broadcast("eventName", { data: data });

    $emit:
        Checks in Own Controller Scopes then checks upper controller scope.
        BOTTOM to TOP
        Emits whether or not You handle the events
        

        $scope.$emit('eventName', {data:data})


#### How to Handle/receive/subscribe/consume Event
    $scope.$on("EventName", function(event, data){ 
        // Some operation 
    })

    $rootScope.$on("EventName", function(event, data){ 
        // Some operation 
    })