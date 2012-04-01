<?php require_once '../template/main.php'; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
        <title>BL-DG/news</title>
        <link href="css/index.css" rel="stylesheet"/>
		<link rel="SHORTCUT ICON" href="/tabicon.ico"/>
        <script src="scripts/jquery-1.7.1.min.js"></script>
        <script src="scripts/scroll.js"></script>
        <script src="scripts/sample.js"></script>
    </head>
    <body>
        <div id='bg_img'>
            <img src='images/news.jpg' />
        </div>
        <div id='container'>
            <?php nav_bar(); ?>
            <div id='inner_container'>
                <div id='left_container'>
                    <div id='news_view_eng'>
                        <div id='news_eng_title_view'>
                            news
                        </div>
                        <div id='news_eng_content_view'>
                            12/2011	BL-DG is officially founded.<br /><br />
                        </div>
                    </div>
                </div>

                <div id='middle_container'>
                    <div id='news_view_scn'>
                        <div id='news_scn_title_view'>
                            新闻
                        </div>
                        <div id='news_scn_content_view'>
                           12／2011 BL-DG事务所正式成立
                        </div>
                    </div>
                </div>

                <div id='right_container'>
                    <div id='news_view_tcn'>
                        <div id='news_tcn_title_view'>
                            號外
                        </div>
                        <div id='news_tcn_content_view'>
                           BL-DG事務所正式成立
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
