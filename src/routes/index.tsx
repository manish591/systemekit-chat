import { Button } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";

function Index() {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div>
				<h3
					style={{
						fontSize: "4rem",
					}}
				>
					Welcome Home!
				</h3>
				<Button variant="contained">Hello world</Button>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias magni
					a architecto ratione id est non quidem, corrupti omnis consequatur,
					maiores aliquam unde, facere nesciunt dignissimos nobis porro nulla.
					Cum! Neque quibusdam consequatur, accusamus consequuntur labore eius
					nostrum ea itaque quos qui aspernatur placeat pariatur laudantium
					minima provident error nobis, eos alias? Expedita optio velit
					praesentium saepe nesciunt, asperiores repellat. Nemo qui, accusamus
					dolor itaque doloribus magnam deserunt illo. Facere doloribus
					voluptates officia, assumenda eaque, quae voluptatibus quibusdam
					vitae, illo consectetur nisi nihil explicabo. Enim quisquam laboriosam
					ab accusamus praesentium! Possimus atque incidunt optio, nisi in quas
					perferendis mollitia sint animi voluptates placeat obcaecati.
					Assumenda odit distinctio obcaecati laudantium modi repellat enim
					eligendi cupiditate, sint expedita illum, quasi, totam sunt. Officia
					aliquid dolorum dolores maiores sint. Dolorum ea expedita explicabo
					adipisci, molestias consectetur culpa ducimus iure. Blanditiis quia
					iste suscipit sapiente atque minus. Quos sint culpa incidunt rem
					tenetur delectus! Dolores dolor natus, rerum neque quidem nisi ipsum,
					facilis itaque distinctio tenetur dolorum reiciendis est nostrum
					laborum libero repudiandae! Esse, quibusdam! Minus harum sunt
					accusamus obcaecati hic, commodi natus in! Incidunt, impedit
					voluptatum aperiam voluptatibus libero quod assumenda totam nostrum
					quo fugiat porro, repellendus voluptas maxime obcaecati. Cupiditate
					vel minus laboriosam eaque odit at error, rem alias tempora ipsum
					nostrum. Dolor recusandae quos omnis amet ab sapiente unde.
					Consectetur deleniti numquam architecto possimus, inventore harum
					dolores iure, cumque voluptas repudiandae dolore doloremque voluptatem
					quibusdam libero in dolorem omnis eveniet eos. Sint odit similique
					saepe delectus quo dicta, ea debitis neque? Aut, harum officia optio
					maxime accusantium doloribus corrupti provident magnam itaque quae,
					neque, nemo vel exercitationem est sint inventore cupiditate? Incidunt
					vel nesciunt pariatur, voluptates tempore deserunt aut iste veritatis
					at dignissimos eius doloribus maxime fugit eaque laudantium cupiditate
					sit accusantium sed hic fuga voluptas obcaecati totam corporis?
					Repudiandae, necessitatibus? Similique perferendis alias numquam neque
					excepturi accusamus praesentium iste eos suscipit harum inventore,
					placeat atque molestias sit quis eaque facere sunt iure ipsam. Velit
					ducimus nobis, magnam saepe esse illo! Accusantium dolorum quia
					dolores ex numquam tempore obcaecati tenetur ut illo illum quaerat
					veritatis nemo doloremque inventore, fugiat omnis, blanditiis sit sed
					aliquam? Minus harum laborum consequatur id sequi praesentium.
					Recusandae magni enim tempore commodi, tenetur dignissimos cumque!
					Quaerat et id cumque explicabo minima quos, itaque, delectus eaque
					labore velit inventore rem exercitationem nostrum error saepe
					voluptatibus perspiciatis fugit iure. Accusantium nemo soluta, porro,
					officiis debitis, nostrum recusandae quia odit beatae impedit ad
					dolore cupiditate tempora error. Voluptate deserunt alias quibusdam in
					quia incidunt accusamus commodi officiis! Praesentium, animi
					doloremque. Qui veritatis exercitationem dignissimos aut distinctio
					similique! Veritatis facere aliquid qui aspernatur consectetur!
					Nostrum nobis commodi officia animi! Modi aliquid impedit molestiae et
					doloremque perferendis labore nihil animi enim est? Perspiciatis
					blanditiis quibusdam nostrum repudiandae, quia deleniti. Eveniet
					voluptatibus minima ratione necessitatibus unde, ea reiciendis. Maxime
					aliquid aspernatur, quam eos vel doloribus mollitia numquam nostrum
					perspiciatis id alias. Vitae, ea! Assumenda reprehenderit dignissimos
					rerum quis perferendis, ipsam, quia veritatis molestias ipsum
					necessitatibus distinctio, ut tempora quo accusamus praesentium
					temporibus. Iure, officia in porro corporis ipsam veniam quaerat
					dolore aut incidunt! Quia debitis alias, sapiente, magni perferendis
					eius nisi assumenda ut praesentium iste quasi minus similique quo
					officiis blanditiis commodi, unde corrupti? Nisi cupiditate doloremque
					optio necessitatibus in qui, doloribus labore? Unde alias expedita
					repudiandae distinctio aspernatur quod omnis suscipit consequuntur
					velit, odit corporis iusto facilis tempora ullam voluptatibus deleniti
					hic? Dicta, fugit laborum nemo ipsum et consequuntur accusamus
					similique quis! Provident quo alias illum aliquam incidunt officia
					dolorum eum quae minus tenetur cumque ullam asperiores, quisquam,
					nesciunt sapiente maiores, praesentium numquam hic facilis nam! Omnis
					facere beatae ex nesciunt perspiciatis.
				</p>
			</div>
		</div>
	);
}

export const Route = createFileRoute("/")({
	component: Index,
});
