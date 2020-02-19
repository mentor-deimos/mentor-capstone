(function($) {
    var request = $.ajax({'url': '/ads.json'});
    request.done(function (users) {
        var html = '';
        users.forEach(function(user) {
            html += '<div>';
            html += '<img src="user.filestack_picture_url">';
            html += '<p>' + user.first_name + user.last_name + '</p>';
            html += '<p>' + user.id.user_id.rating + '</p>';
            html += '</div>';
        });
        $('#users').html(html);
    });
})(jQuery);