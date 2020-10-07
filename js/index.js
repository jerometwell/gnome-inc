var placeholder_image = "http://placehold.it/800x400.jpg?text=MISSING+SCENE"
var places = {
  intro : {
    background  : "assets/intro.jpg",
    description : "Today is your first day at Gnome Inc. What Do?",
    choices     : [
	  ["first_day", "Go inside and face your destiny."],
      ["ending_truck", "Turn around and run as far away as possible."]
    ]
    
    },
  ending_truck  : {
    background  : "assets/matalan_truck.jpg",
    enter_sound : "assets/crash.mp3",
    description : "You die a horrific death under the wheels of a Matalan truck.",
    choices     : [
      ["intro", "Start Again"]
    ]
    
    },
    ending_basement  : {
    background  : "assets/creepybasement.jpg",
    enter_sound : "assets/tng-locutus-urlifeisover.mp3",
	loop_sound  : "assets/tng_hum_clean.mp3",
    description : "You are locked in the basement for all eternity. Something nibbles at your toes.",
    choices     : [
      ["intro", "Start Again"]
    ]
    
    },
  first_day   : {
    background  : "assets/first_guy.jpg",
	enter_sound : "assets/morn.mp3",
    description : "You bump into a small man with a hat on. He says 'Greetings! Welcome to Gnome Inc.' You notice a distinct smell of onions.",
    choices     : [
      ["onions", "Do you smell onions?"],
      ["first_day_sure", "Get to work."]
    ]
  },
  
  first_day_sure   : {
    background  : "assets/first_guy_sure.jpg",
	enter_sound : "assets/comeonson.mp3",
    description : "\"Are you sure I cant... help ... you with anything, rookie?\"",
    choices     : [
      ["first_day_really_sure", "Yes, Thanks."]
    ]
  },
  
   first_day_really_sure   : {
    background  : "assets/first_guy_really_sure.jpg",
	enter_sound : "assets/dontmakebeg.mp3",
    description : "\"You don't sound sure...\"",
    choices     : [
	["ending_basement", "Well... if you insist..."],
      ["start_work", "I AM SURE THANK YOU VERY MUCH GOODBYE NOW"]
    ]
  },
  
  
    onions   : {
    background  : "assets/first_guyangry.jpg",
	enter_sound : "assets/outofmind.mp3",
    description : "\"What did you just say to me, you little bitch? I'll have you know I was voted GNOME magazine's top smelling gnomes of the year 2016.\"\n",
    choices     : [
      ["ending_basement", "Dude, lay off the Bolognaise."],
      ["start_work", "Yes sir, sorry. won't happen again."]
    ]
  },
    start_work   : {
    background  : "assets/office.jpg",
	loop_sound  : "assets/crowd.ogg",
    description : "You sit down at the nearest desk. There is an entire team of people working away.",
    choices     : [
      ["speak_person", "Speak to the nearest person."],
	  ["computer", "Use the computer"],
	  ["desk", "Look around the desk."]
    ]
  },
      computer   : {
    background  : "assets/bsod.jpg",
	loop_sound   : "assets/042.wav",
    description : "A functional computer at a software company? Absurd.",
    choices     : [
      ["office2", "Back to the office"]
    ]
  },
      fired   : {
    background  : "assets/fired.jpg",
	enter_sound  : "assets/the-price-is-right-losing-horn.mp3",
    description : "Nice job, doofus. You got yourself fired.",
    choices     : [
      ["intro", "Start Again"]
    ]
  },
  speak_person   : {
    background  : "assets/second_chat.jpg",
	enter_sound  : "assets/hey.ogg",
    description : "You approach a fellow employee and introduce yourself. They politely say hello.",
    choices     : [
      ["speak_person_mouth", "Ask for Help"],
	  ["fired", "Scream obsenities at them"]
    ]
  },
  speak_person_mouth   : {
    background  : "assets/second_chat_mouth.jpg",
	enter_sound : "assets/wtfthat.mp3",
    description : "They say nothing, but their mouth slowly widens to an inhuman size. You swear you can hear buzzing.",
    choices     : [
      ["speak_person_bees", "Politely offer to take them out for afternoon Tea"],
	  ["speak_person_bees", "Say Nothing"],
	  ["office2", "Run!"]
    ]
  },
  speak_person_bees   : {
    background  : "assets/bees.jpg",
	loop_sound  : "assets/hive.ogg",
    description : "A thousand bees swarm out of the hole in your co-worker's face. In an instant, the office is filled with stinging, swarming, nasty bees. WHAT HAVE YOU DONE?! ",
    choices     : [
      ["ded", "OH GOD NOT THE BEES GOD WHY NOT THE BEES ARGH WHY GOD WHY THE PAIN"],
    ]
  },
  office2   : {
    background  : "assets/office2.jpg",
	loop_sound  : "assets/tng_hum_clean.mp3",
    description : "\"Oh, There you are. You're late for a meeting!\"",
    choices     : [
      ["fired", "\"YOUR FACE is late for a meeting.\""],
	  ["meeting", "Go to the meeting."],
    ]
  },
  ded   : {
    background  : "assets/ded.jpg",
	enter_sound  : "assets/silly_farts.mp3",
    description : "You are dead.",
    choices     : [
      ["intro", "Start Again"],
    ]
  },
  desk   : {
    background  : "assets/desk.jpg",
	loop_sound  : "assets/crowd.ogg",
    description : "In front of you are the following items: a pair of scissors, a rusty paperclip, and a mysterious button.",
    choices     : [
      ["scissors", "Grab the Scissors"],
	  ["tetanus", "Grab the Paperclip"],
	  ["explosion", "Push the mysterious button!"],
	  ["office2",    "Back to the Office"]
    ]
  },
    explosion   : {
    background  : "assets/explosion.jpg",
	enter_sound  : "assets/largeexplosion4.mp3",
	loop_sound  : "assets/tng_hum_clean.mp3",
    description : "There's barely enough time to complain about the weather before the entire city district is vaporised.",
    choices     : [
      ["ded", "NICE ONE M8"]
    ]
  },
      tetanus   : {
    background  : "assets/tetanus.jpg",
	enter_sound  : "assets/boo.mp3",
    description : "You stab yourself on the rusty paperclip and promptly catch tetanus.",
    choices     : [
      ["ded", "BLARGH!"]
    ]
  },
        scissors   : {
    background  : "assets/stolen_scissors.jpg",
	enter_sound  : "assets/Gasp.ogg",
    description : "Congratulations, you dimwit. You've just stolen someone's scissors.",
    choices     : [
      ["scissors2", "er..."]
    ]
  },
          scissors2   : {
    background  : "assets/stolen_scissors2.jpg",
	enter_sound  : "assets/phaser.mp3",
    description : "\"You'll pay for this insolence, you damn gnome!\"",
    choices     : [
      ["ded", "Nice."]
    ]
  },
  
  meeting   : {
    background  : "assets/meeting.jpg",
	enter_sound : "assets/tobe2.wav",
    description : "\"...And that concludes our plan for Corporate Evil 101. You, Rookie, any suggestions?\"",
    choices     : [
      ["meeting_look", "er..."]
    ]
  },
  
  meeting_look   : {
    background  : "assets/meeting_look.jpg",
	enter_sound : "assets/proceed.ogg",
    description : "\"Well, spit it out!\"",
    choices     : [
      ["meeting_wtf", "Don't say anything. Simply remove your clothes."],
	  ["meeting_wtf", "Charity coffee morning!"],
	  ["meeting_good", "er... Kill the poor?"]
    ]
  },
  
    meeting_wtf   : {
    background  : "assets/meeting_wtf.jpg",
	enter_sound : "assets/gasp.ogg",
    description : "Uh oh. Looks like you've really crossed the line with that last comment.",
    choices     : [
      ["fired", "Show yourself out."],
	  ["ending_basement", "Ah, fisticuffs, eh?"],
    ]
  },
  
      meeting_good   : {
    background  : "assets/meeting_good.jpg",
	enter_sound : "assets/applause.ogg",
    description : "\"Hey, nice one rookie! Didn't think you had it in you. How do you fancy yourself an eeez-ek-u-tive?\"",
    choices     : [
      ["corporatewin", "Yes sir!"],
	  ["ending_basement", "No thanks, I'm good."],
    ]
  },
  
   corporatewin   : {
    background  : "assets/corporatewin.jpg",
	loop_sound  : "assets/backinblack.ogg",
    description : "You achieve your gnome-dreams of gnome corporations. YOU ARE THE 1%!",
    choices     : [
	  ["intro", 	   "Again?"]
    ]
  }
  
}

var place_history = [];

function traverse_places(start_place, current_level, max_levels, found_place_names) {
  if(current_level >= max_levels) {
    return false;
  }
    var found_places = [];
  if(found_place_names === undefined) {
    var found_place_names = [];
  }
  if(current_level <= 0) {
    found_place_names.push(start_place);
    start_place = places[start_place];
    found_places.push(start_place);
  }
  if(!!start_place.choices === false) {
    return false;
  }
  

  for(var i = 0; i < start_place.choices.length; i = i + 1) {
    var choice_place_name = start_place.choices[i][0];
    if(found_place_names.indexOf(choice_place_name) !== -1) {
      continue;
    }
    var choice_place = places[ choice_place_name ];
    if(!choice_place) {continue;}
    found_places.push( choice_place );
    found_place_names.push (choice_place_name);
    
    if(choice_place.choices.length > 0) {
      found_places = found_places.concat(traverse_places(choice_place, current_level+1, max_levels, found_place_names) || []);
    }
  }
  
  return found_places;
}

function list_all_assets(place_list) {
  var asset_list = []
  for(var i = 0; i < place_list.length; i = i + 1) {
    var place = place_list[i];
    if(place.background) {asset_list.push(place.background)};
    if(place.loop_sound) {asset_list.push(place.loop_sound)};
    if(place.enter_sound) {asset_list.push(place.enter_sound)};
  }
  return asset_list;
}


function clear_container(container) {
    while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function draw_choice_buttons(place, container) {
  choices = place.choices;
  clear_container(container);

  for(var i = 0; i < choices.length; i = i + 1) {
    var choice = {
      destination : choices[i][0],
      title       : choices[i][1]
    }
    var new_button = document.createElement("button");
    new_button.onclick = go_to_place.bind(window, choice.destination);
    new_button.innerText = choice.title;
    
    container.appendChild(new_button);
  }
  
  
}

function build_sound_element(src, loop) {
  var audio = document.createElement("audio");
  audio.preload = true;
  if(loop) {audio.loop = "loop"};
  var source = document.createElement("source")
  source.src = src;
  audio.appendChild(source);
  return audio;
  
}
function build_image_element(src) {
  var image = document.createElement("img");
  image.src = src;
  image.alt = "";

  return image;
  
}

/**
 * load a list of resources off-screen
 */
function precache(asset_list, container) {
  clear_container(container);
  container.style.display = "none";
  var precache_list = [];
  var audio_ext = ["mp3","ogg","wav"];
  var image_ext = ["jpg","gif","png"];
  for(var i = 0; i < asset_list.length; i = i + 1) {
    var asset = asset_list[i];
    var ext = asset.split(".");
    ext = ext[ext.length-1];
    
    if( audio_ext.indexOf(ext) !== -1) {
      //Audio
      container.appendChild( build_sound_element(asset) );
    } else if( image_ext.indexOf(ext) !== -1) {
      //Image
      container.appendChild( build_image_element(asset) );
    }
    
  } 
}

function draw_assets(place, container) {
  var sounds = [];
  clear_container(container);
  if(place.loop_sound) {
    var loop_sound  = build_sound_element(place.loop_sound,true);
    sounds.push(loop_sound);
  } 
  if(place.enter_sound) {
    var enter_sound = build_sound_element(place.enter_sound);
    sounds.push(enter_sound);
  }
  
  for(var i = 0; i < sounds.length; i = i + 1) {
    container.appendChild(sounds[i]);
  }
  for(var i = 0; i < sounds.length; i = i + 1) {
    sounds[i].play();
  }
}



function go_to_place(place_name) {
  place_history.push(place_name);
  draw_place(place_name);
}
function draw_place(place_name){
  var place       = places[place_name];
  var background  = document.getElementById("background");
  var choices     = document.getElementById("choices");
  var description = document.getElementById("description");
  var assets      = document.getElementById("assets");
  
  background.style.backgroundImage = "url('" + (place.background || placeholder_image) + "')";
  description.innerText = place.description
  draw_choice_buttons(place, choices);
  draw_assets(place, assets)
  
  // preload traversable resources from current place
  precache(list_all_assets(traverse_places("intro", 0, 3)), document.getElementById("cache") );
  
}

go_to_place("intro");