/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

var app = new Vue({
  el: '#app',
  data: {
    sections: [
      {
        img:
          'https://lh3.googleusercontent.com/1vNgEcby5OLyFQms6OKO1D3l-ja5H1goYrsMKcAw3Ink8D0gsjWg99kBnGQ7_sbjHm7zlPT3_Gj_jsgX3_o0QTwksLY6Rlibh8iXDs4qql2QZhnlexHgpH8XfVX0UQVQva4e3ns3HvKQB7AzV_c46H1y6FYiZF5N7n81zRfmbvdsjaZ1YhaB_pX4Pg2X5L7mstgNzqsjDgvedsHlkTyJuvWFfotr0ExtI_93zszGBsky0t8Io9nlzRYJB9xItEnryzRpp1fbwDztFCImmiP9AFGiYkQGJlXSHxCmlw9vhHqBNStPrBvYLklT3Qbncfv5rEnAqDVpETjTwKOrji-ZhhWBntU1JGk8RxXEAYjKixoIUEe-nlsN-GK83WyQcUNkqd2PUj5IkPOlszTX-qDjT9Ft-ndkiSMo4H9xyVPCM2KeiZZcSBttC9jD7VaL8QIj3OSspyDFf-bFGI3LeIix7gS0fc_wiCHFb4fFLBND7jy-NMyiwirh8gC4AOhm-gG0tzYhCeaizJ0IIqWhRHJs0hIev-QT4IRiRYCe2-kAwKvemL-eoYlfcRuglxau-_GlhuGOJGSoEbXQEZWPe_qH5CQNysAMzZDFaI5xCstsxXbZDSAl8iMJ4SuF1fZe6RlQ57iLsgDZnCh96CunOskAMjNmQYCChBtHgBo0TGHzKmekPvD2mAe1uQ=w597-h1259-no',
        title: 'Projects',
        tag: 'python'
      },
      {
        img:
          'https://lh3.googleusercontent.com/iDF6bYGkVN-rX5Nmc9hwjVjB6y_2Sy_OoeBpExDf_vDhX8kHJr8bKuKog1Mba4x-s5-12jIclhkrJJvAWKGpixGyCllmOhY6kIhNrZU0m3jtbUDCTchLjheKkRko3NPfeXjgBIxl7P_qSQgWN8eiD4B4xzm0cPoxnQ3R65P-rWRnHE_fnbvBMmY_6ZT73HgghcMEWaLPPyl85XW0jwrN-vJVgvT7T3Njk2MmUNYbVwNtCYR4tAxkxUkqDd7TkQ363EB8RIPFnjtw2eTb6NGp0Hnoph6FMPP1SsIq0gs912tFKMh9s5g7E0XixmPoWtahPrCenuj1vUN-7g9wV146Ii1k5SaI8uB_z4ouHmrOSfYsYImmWZHI79hDC4wEtslmxJPfCTMu5uOJVwjFjHv_j_hpLlaWL7ZFh0pdcFcC7VrGL2PFGOHd_CFYe7QNUarRod7O3UWHod9auvwcHGOWWtmo1ToqdRHHiTqraMXEMa-QTyqAzOxTFIT9ZgtmxfIzPfG59URj8dWJukCJ0iObmRbazIP4gQnwaOX22tnG3-8NVwmqXQ2UjBZnK2ap_0Q4z9i33WFFlNL4dGTVnNC7NI7SxyftATtssQ4T_zXKI0lUfjY20t-VkjQ2dBVcW-qmocqjI91Mjto0l_cu5V6A5yTg-JoEm-FHdil6ZsYwwGth-BstvQ-t0w=w945-h1259-no',
        title: 'Articles',
        tag: 'technician'
      },
      {
        img:
          'https://lh3.googleusercontent.com/LlpP8qZZXkZn5i2CYyq4k1rf7z_gvCablvaWRF49Z1ZZ7AY1ripSgV0r5r2bPCtDhjikfv5H3cU-TeUFmrsoCqKIvnOYmhRdrYmKqxWj_dMRG_eerrnEU9Q6Ky7ZyMTYroB3B_HDbiLq15MSpV2yoqYK8UBwP_sScXu6IsDilbubu9dAHvp5KZe2sPu4fsTbLxFFs3b_dHMZM3FRNAJ7sNRK4drgv3QRbhOESruFREh-yD8cTTLK1sw4r9XN1hk8p6SKNjK5rOP9qVvSDV5GwzAQUOGC3jcInd7DKUEE1_RCnwVupQz19UbNfNrQoSkKnnSp1d8i3GOJjjPflqnJQZ4xgyZzrtZUDGkzW0_zCcftp8EjAfMBkhugL2ysleayIJlcFmPkcD4lSra_OOvBqkGkvAwL8CTVKoEktFmuTjjRe0QuTmN8Ee_B9R9LqotNw7vvbrQzJsc1LRQ7ri3g7fPYCkDK97PzdJt3KdoJ81g6dRK8C2mbGrzz9RQnfYI4_9MPwxGzITXkZTY2u9jWkFtHd3M_DVNFoU5XJWwucJTjFx8Zs9NMEjsjU4tHCdPnEtjfNSovM2XtYmOkkHsnQq04Cp4sQvAOglA_SxIVqdRAYr8RM2cj5N8btltEKihgeJPcCazApl51pBM1cRmQ3isUTQxKFk7fOLd-9NC3B-xlNQ0p1D2VDA=s1259-no',
        title: 'Resume',
        tag: 'me'
      }
    ],
    icons: [
      {
        url: 'https://github.com/mrmrs',
        title: 'GitHub',
        path:
          'M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8'
      },

      {
        url: 'https://medium.com/@skeuomorphist_',
        title: 'Medium',
        path:
          'M11.824 12.628l-.276.45.798.398 2.744 1.372c.15.076.294.11.418.11.278 0 .467-.177.467-.492V5.883l-4.15 6.745zm4.096-8.67c-.004-.003 0-.01-.003-.012l-4.825-2.412c-.06-.03-.123-.038-.187-.044-.016 0-.03-.01-.047-.01-.184 0-.368.092-.467.254l-.24.39-.5.814-1.89 3.08 1.89 3.076.5.813.5.812.59.95 4.71-7.64c.02-.03.01-.06-.02-.08zm-6.27 7.045L7.17 6.97l-.295-.477-.294-.477-.25-.416v4.867l3.32 1.663.5.25.5.25-.5-.813-.5-.813zM.737 1.68L.59 1.608c-.085-.042-.166-.062-.24-.062-.206 0-.35.16-.35.427v10.162c0 .272.2.594.442.716l4.145 2.08c.107.06.208.08.3.08.257 0 .438-.2.438-.53V4.01c0-.02-.012-.04-.03-.047L.738 1.68z'
      },

      {
        url: 'https://linkedin.com',
        title: 'LinkedIn',
        path:
          'M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z'
      },

      {
        url: 'https://twitter.com/skeuomorphist_',
        title: 'Twitter',
        path:
          'M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z'
      }
    ]
  },
  methods: {
    delay (x) {
      setTimeout(() => {
        window.location.href = x
      }, 500)
    }
  },
  created () {
    console.log("I'm Boz")
  }
})
