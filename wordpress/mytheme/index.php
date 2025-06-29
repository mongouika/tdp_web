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
        <section class="news_sec">
            <h2>お知らせ</h2>

            <!--
            <?php wp_list_categories(); ?>
            //-->
            

            <?php
            $args = [
                'category_name' => 'news',
                'numberposts' => 3
            ];
            ?>
            <dl>
            <?php 
            // 条件を渡して記事を取得
            $custom_posts = get_posts($args);
            foreach ( $custom_posts as $post ): setup_postdata($post); ?>
                <dt><?php the_time('Y/m/d') ?></dt><dd><?php the_title(); ?></dd>
            <?php endforeach; ?>
            </dt>


        </section>

        <section class="product_sec">
            <h2>製品</h2>
            <div class="frame">

                <?php
                $args = [
                    'category_name' => 'product',
                    'numberposts' => 10,
                    'order' => 'DESC'
                ];
                ?>

                <ul>
                    <?php 
                    // 条件を渡して記事を取得
                    $custom_posts = get_posts($args);
                    foreach ( $custom_posts as $post ): setup_postdata($post); ?>
                    <li>
                        <a href="<?php the_permalink(); ?>">
                        <?php the_post_thumbnail('thumbnail'); ?>
                        <p><?php the_title(); ?></p>
                        </a>
                    </li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </section>
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