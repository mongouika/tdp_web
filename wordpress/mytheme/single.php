<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>index_template</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/style.css">

</head>
<body class="my_index">
    <header class="my_fv">
        <div class="frame">
            <h1><a href="<?php echo home_url('/'); ?>"><span><?php bloginfo('name'); ?></span></a></h1>
        </div>
    </header>

    <main class="my_main">
        

    <?php if(have_posts()):while(have_posts()):the_post(); ?>
      <?php
        $cat = get_the_category();
        $catname = $cat[0]->cat_name;
      ?>
      <article>
        <h1 class="article-title">
          <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
        </h1>
        <ul class="meta">
          <li><?php the_time('Y/m/d'); ?></li>
          <li><?php echo $catname; ?></li>
        </ul>
        <div>
        <img class="wp-post-image" src="<?php the_post_thumbnail_url('full'); ?>" />
        </div>

        <div class="text"><?php the_content(); ?></div>
      </article>
    <?php endwhile;endif; ?>


    </main>

    <footer class="my_footer">
        <div class="frame">
            <nav class="large">
                <ul>
                    <li>
                        <a href="">カテゴリ:01のアーカイブへ</a>
                    </li>
                    <li>
                        <a href="">カテゴリ:02のアーカイブへ</a>
                    </li>
                </ul>
            </nav>

            <nav class="small">
                <ul>
                    <li>
                        <a href="">固定ページid:01</a>
                    </li>
                    <li>
                        <a href="">固定ページid:02</a>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>
</body>
</html>