
    var resultArray = [];

    function search() {
        if(event.keyCode == 13) {

            $.ajax({
                url: "http://localhost:7070/book/bookList",
                type: "GET",
                dataType: "jsonp",
                jsonp: "callback",
                data: {
                    keyword: $(".form-control").val()
                },
                success: function(result){

                    $('tbody tr').remove();

                    for(var i=0; i<result.length; i++)
                    {
                        var tr = $("<tr></tr>").attr("data-isbn", result[i].isbn);
                        var img = $("<img width='130px' />").attr("src", result[i].img);
                        var imgtd = $("<td></td>").append(img);
                        var titletd = $("<td></td>").text(result[i].title);
                        var authortd = $("<td></td>").text(result[i].author);
                        var pricetd = $("<td></td>").text(result[i].price);

                        tr.append(imgtd);
                        tr.append(titletd);
                        tr.append(authortd);
                        tr.append(pricetd);

                        $("tbody").append(tr);
                    }

                },
                error: function() {
                    alert("search error");
                }
            });
        }
    }
