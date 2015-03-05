var activities = {

    searchByUserId: function(id) {

        // search activities by userId (default user, 101193)
        var id = id || '101193'

        $.get("https://vimeo.com/api/v2/activity/"+ id +"/user_did.json", function(data) {

                console.log('now ' + data)
                
                $.get("/vimeo/activities/list.jade", function(template) {
                    var html = jade.render(template, {
                        data: data
                    });
                    console.log(html)
                    $("#list").html(html)
                })
            })
    },

  
    load: function() {

        $.get("/vimeo/activities/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

        // default search results
        activities.searchByUserId('101193')

    }

}