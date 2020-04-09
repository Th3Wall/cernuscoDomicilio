export default function Form() {
	return (
		<div class="">
			<form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
				<p>
					<input type="hidden" name="form-name" value="contact" />
				</p>
				<div class="flex flex-wrap mx-3 mb-3 mt-5">
					<div class="w-full md:w-1/2 px-3 mt-3">
						<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-name">
							Nome
						</label>
						<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-name" required type="text" name="name" placeholder="es: Panificio Mario Rossi" />
					</div>
					<div class="w-full md:w-1/2 px-3 mt-6 md:mt-3">
						<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-phone">
							Numero di telefono
						</label>
						<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-phone" type="text" name="telephone" placeholder="es: 3331234567" />
					</div>
				</div>
				<div class="flex flex-wrap mx-3 mb-3 md:mt-8">
					<div class="w-full md:w-1/2 px-3 mt-3 md:mt-0">
						<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
							Email
						</label>
						<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-email" type="text" name="mail" placeholder="es: mario.rossi@mail.it" />
					</div>
					<div class="w-full md:w-1/2 px-3 mt-6 md:mt-0">
						<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-website">
							Sito Web
						</label>
						<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-website" type="text" name="site" placeholder="es: www.mario-rossi.website.it" />
					</div>
				</div>
				<div class="flex flex-wrap mx-3 mb-6 mt-6 md:mt-8">
					<div class="w-full px-3">
						<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-note">
							Note
						</label>
						<textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" rows="5" id="grid-note" type="text" name="note" placeholder="es: Consegna gratuita dalle 10:00 alle 18:00" />
					</div>
				</div>
				<p class="my-5 mx-6 md:mt-8">
					<button class="block w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="submit">Invia</button>
				</p>
			</form>
		</div>
	);
}
