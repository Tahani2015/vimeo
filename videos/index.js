var videos = {

    searchByUserId: function(id) {

        // search videos by userId (default user, 101193)
        var id = id || '101193'
               
        $.get("https://vimeo.com/api/v2/" + id + "/videos.json", function(data) {
            
            console.log('now ' + data)
            
            if (data){
            $.get("/vimeo/videos/list.jade", function(template) {
                var html = jade.render(template, {
                    data: data
                });
                console.log(html)
                $("#list").html(html)
                })
            }
        })
    },

  
    load: function() {

        $.get("/vimeo/videos/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

        // default search results
        videos.searchByUserId('101193')

    }

}