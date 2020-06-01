<script>
    jq(document).ready(function() {
        jq("#statusUpdaterButton").click(
            function () {
                jq.get("statusUpdater/savePost.action", {title: jq("#statusUpdaterTitle").val(), content:jq("#statusUpdaterContent").val()}, function(){
                        location.reload();
                });
            });
    });
</script>
    <div class="form-group">
        <div class="panel panel-default">
            <div class="panel-body">
                <input id="statusUpdaterTitle" name="title" class="form-control" placeholder="Title for your Journal Post">
                <br>
                <textarea id="statusUpdaterContent" name="content" class="form-control" placeholder="Share your thoughts"></textarea>
            </div>
            <div class="panel-footer clearfix">
                <div class="pull-right">
                    <label><small><span class="fa fa-info-circle fa-lg"></span> &nbsp;Your post will be shared with all the people who have access to your posts, such as doctors or family members</small></label>
                    <button id="statusUpdaterButton" class="btn btn-primary btn-sm" >Post</button>
                </div>
            </div>
        </div>
    </div>
