import Styles from '../CSS/Styles.module.css'


export default function About({fontIncrease, colorReversal}) {
  return (
    <div>
        <h1 style={{color: colorReversal ? "white" : "black"}}>About Us</h1>
        <div style={{display: 'flex'}}>
                <p style={{fontSize: fontIncrease? '300%':'150%',transition:'1s',color: colorReversal ? "white" : "black"}} className={Styles.aboutParagraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quia fugiat nostrum illo doloribus neque incidunt cum cupiditate. Atque aut provident est ab corrupti numquam explicabo cupiditate, accusamus culpa sed.
                Quaerat eos amet placeat culpa quod provident, perferendis iste dolorum! Odio iusto error quam sed expedita quibusdam deleniti voluptatibus doloribus nulla, aperiam distinctio accusantium ipsum laborum quia harum, esse dolorem.
                Fugit consectetur autem, quasi ipsam minus eaque. Sint sapiente tempora a debitis dolore pariatur, quas veritatis est reiciendis nostrum obcaecati distinctio dolores eum, ea similique illo commodi, architecto itaque fugiat!
                Nam facere iusto eos, perferendis iure sint veritatis, labore quod voluptas minima placeat ullam, minus corporis. Modi, alias non amet possimus, iure fuga eius quae velit assumenda eos facere dolorum!
                Exercitationem quaerat excepturi optio laboriosam eos itaque dicta placeat quis nostrum deserunt. Eveniet sequi atque quis, et vel dolore, quasi eum, eligendi molestiae praesentium laudantium? Voluptatibus dolor itaque explicabo eveniet.
                Expedita eligendi aliquid, numquam quos rerum omnis. Omnis in distinctio officiis voluptate velit iusto aut, iste esse ipsa autem expedita beatae debitis, dignissimos eum nam voluptates quas quo vel est.
                Reprehenderit dolorum, cumque facilis omnis eligendi aut provident beatae ab maiores suscipit, enim accusamus ut voluptatum corporis! Reprehenderit, aspernatur aperiam. Totam consequatur aut impedit, libero iure dolore. Dolorum, obcaecati minus.
                Voluptate culpa amet ratione qui nobis neque dolor quas tenetur distinctio expedita ab animi quasi earum, dignissimos autem doloribus blanditiis inventore cumque obcaecati aperiam minus. Natus possimus quo officia quos?
                Corrupti delectus quidem consequuntur magni ab cum doloribus ipsum ex nulla fuga fugiat similique voluptatibus tempora excepturi cupiditate natus, suscipit incidunt necessitatibus alias cumque tempore consequatur numquam commodi quisquam. Est?
                Culpa corporis vitae suscipit voluptate, repellendus ut assumenda quis, recusandae fuga praesentium doloremque eveniet voluptas voluptatem maxime ipsum debitis. Soluta ipsa ea sequi unde tempore beatae saepe inventore fugiat nam!</p>

                <p style={{fontSize: fontIncrease? '300%':'150%',transition:'1s',color: colorReversal ? "white" : "black"}} className={Styles.aboutParagraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quia fugiat nostrum illo doloribus neque incidunt cum cupiditate. Atque aut provident est ab corrupti numquam explicabo cupiditate, accusamus culpa sed.
                Quaerat eos amet placeat culpa quod provident, perferendis iste dolorum! Odio iusto error quam sed expedita quibusdam deleniti voluptatibus doloribus nulla, aperiam distinctio accusantium ipsum laborum quia harum, esse dolorem.
                Fugit consectetur autem, quasi ipsam minus eaque. Sint sapiente tempora a debitis dolore pariatur, quas veritatis est reiciendis nostrum obcaecati distinctio dolores eum, ea similique illo commodi, architecto itaque fugiat!
                Nam facere iusto eos, perferendis iure sint veritatis, labore quod voluptas minima placeat ullam, minus corporis. Modi, alias non amet possimus, iure fuga eius quae velit assumenda eos facere dolorum!
                Exercitationem quaerat excepturi optio laboriosam eos itaque dicta placeat quis nostrum deserunt. Eveniet sequi atque quis, et vel dolore, quasi eum, eligendi molestiae praesentium laudantium? Voluptatibus dolor itaque explicabo eveniet.
                Expedita eligendi aliquid, numquam quos rerum omnis. Omnis in distinctio officiis voluptate velit iusto aut, iste esse ipsa autem expedita beatae debitis, dignissimos eum nam voluptates quas quo vel est.
                Reprehenderit dolorum, cumque facilis omnis eligendi aut provident beatae ab maiores suscipit, enim accusamus ut voluptatum corporis! Reprehenderit, aspernatur aperiam. Totam consequatur aut impedit, libero iure dolore. Dolorum, obcaecati minus.
                Voluptate culpa amet ratione qui nobis neque dolor quas tenetur distinctio expedita ab animi quasi earum, dignissimos autem doloribus blanditiis inventore cumque obcaecati aperiam minus. Natus possimus quo officia quos?
                Corrupti delectus quidem consequuntur magni ab cum doloribus ipsum ex nulla fuga fugiat similique voluptatibus tempora excepturi cupiditate natus, suscipit incidunt necessitatibus alias cumque tempore consequatur numquam commodi quisquam. Est?
                Culpa corporis vitae suscipit voluptate, repellendus ut assumenda quis, recusandae fuga praesentium doloremque eveniet voluptas voluptatem maxime ipsum debitis. Soluta ipsa ea sequi unde tempore beatae saepe inventore fugiat nam!</p>
        </div>
    </div>
  );
}
