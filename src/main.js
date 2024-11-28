const readline = require('readline');

// Initialize the readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Habitat data
const camel = `
Switching on the camera in the camel habitat...
 ___.-''''-.
/___  @    |
',,,,.     |         _.'''''''._
     '     |        /           \\
     |     \\    _.-'             \\
     |      '.-'                  '-.
     |                               ',
     |                                '',
      ',,-,                           ':;
           ',,| ;,,                 ,' ;;
              ! ; !'',,,',',,,,'!  ;   ;:
             : ;  ! !       ! ! ;  ;   :;
             ; ;   ! !      ! !  ; ;   ;,
            ; ;    ! !     ! !   ; ;     
            ; ;    ! !    ! !     ; ;
           ;,,      !,!   !,!     ;,;
           /_I      L_I   L_I     /_I
Look at that! Our little camel is sunbathing!`;

const lion = `
Switching on the camera in the lion habitat...
                                               ,w.
                                             ,YWMMw  ,M  ,
                        _.---.._   __..---._.'MMMMMw,wMWmW,
                   _.-""        '''           YP"WMMMMMMMMMb,
                .-' __.'                   .'     MMMMW^WMMMM;
    _,        .'.-'"; \`,       /\`     .--""      :MMM[==MWMW^;
 ,mM^"     ,-'.'   /   ;      ;      /   ,       MMMMb_wMW"  @\\
,MM:.    .'.-'   .'     ;     \`\\    ;     \`,     MMMMMMMW \`"=./\`-,
WMMm__,-'.'     /      _.\\      F'''-+,,   ;_,_.dMMMMMMMM[,_ / \`=_}
"^MP__.-'    ,-' _.--""   \`-,   ;       \\  ; ;MMMMMMMMMMW^\`\`; __|
           /   .'            ; ;         )  )\`{  \\ \`"^W^\`,   \\  :
          /  .'             /  (       .'  /     Ww._     \`.  \`"
         /  Y,              \`,  \`-,=,_{   ;      MMMP\`""-,  \`-._.-,
        (--, )                \`,_ / \`) \\/"")      ^"      \`-, -;"\\:
The lion is roaring!`;

const deer = `
Switching on the camera in the deer habitat...
   /|       |\\
\`__\\\\       //__'
   ||      ||
 \\__\`\\     |'__/
   \`_\\\\   //_'
   _.,:---;,._
   \\_:     :_/
     |@. .@|
     |     |
     ,\\.-./ \\
     ;;\`-'   \`---__________-----.-.
     ;;;                         \\_\\
     ';;;                         |
      ;    |                      ;
       \\   \\     \\        |      /
        \\_, \\    /        \\     |\\
          |';|  |,,,,,,,,/ \\    \\ \\_
          |  |  |           \\   /   |
          \\  \\  |           |  / \\  |
           | || |           | |   | |
           | || |           | |   | |
           | || |           | |   | |
           |_||_|           |_|   |_|
          /_//_/           /_/   /_/
Our 'Bambi' looks hungry. Let's go to feed it!`;

const goose = `
Switching on the camera in the goose habitat...

                                    _
                                ,-"" "".
                              ,'  ____  \`.
                            ,'  ,'    \`.  \`._
   (\`.         _..--.._   ,'  ,'        \\    \\
  (\`-.\\    .-""        ""'   /          (  d _b
 (\`._  \`-"" ,._             (            \`-(   \\
 <_  \`     (  <\`<            \\              \`-._\\
  <\`-       (__< <           :
   (__        (_<_<          ;
    \`------------------------------------------
The goose is staring intently at you... Maybe it's time to change the channel?`;

const bat = `
Switching on the camera in the bat habitat...
_________________               _________________
 ~-.              \\  |\\___/|  /              .-~
     ~-.           \\ / o o \\ /           .-~
        >           \\\\  W  //           <
       /             /~---~\\             \\
      /_            |       |            _\\
         ~-.        |       |        .-~
            ;        \\     /        i
           /___      /\\   /\\      ___\\
                ~-. /  \\_/  \\ .-~
                   V         V
This bat looks like it’s doing fine.`;

const rabbit = `
Switching on the camera in the rabbit habitat...
         ,
        /|      __
       / |   ,-~ /
      Y :|  //  /
      | jj /( .^
      >-"~"-v"
     /       Y
    jo  o    |
   ( ~T~     j
    >._-' _./
   /   "~"  |
  Y     _,  |
 /| ;-"~ _  l
/ l/ ,-"~    \\
\\//\\/      .- \\
 Y        /    Y
 l       I     !
 ]\\      _\\    /"\\
(" ~----( ~   Y.  )
It looks like we will soon have more rabbits!`;

// Array of habitats
const habitat = [camel, lion, deer, goose, bat, rabbit];

// Recursive function for input
function handleInput() {
    rl.question("Which habitat # do you need? (type 'exit' to quit): ", answer => {
        if (answer === "exit") {
            console.log("See you later!");
            rl.close(); // Close the readline interface
        } else {
            const index = Number(answer);
            if (!isNaN(index) && index >= 0 && index < habitat.length) {
                console.log(habitat[index]);
            } else {
                console.log("Invalid input, please try again.");
            }
            handleInput(); // Recursive call for the next input
        }
    });
}

// Start the program
handleInput();
