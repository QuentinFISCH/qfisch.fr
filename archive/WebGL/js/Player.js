Player = function(game, canvas) {
    // _this est l'accès à la caméraà l'interieur de Player
    var _this = this;
    var angularSensibility = 800;
    var speed = 0.4;
    var isRunning = false;
    var jumpNeed = false;
    var originHeight = new BABYLON.Vector3(1, 1, 1);
    var airTime = 0;
    var reset = 0;

    // Le jeu, chargé dans l'objet Player
    this.game = game;

    this.angularSensibility = angularSensibility;
    this.speed = speed;
    this.isRunning = isRunning;
    this.jumpNeed = jumpNeed;
    this.originHeight = originHeight;
    this.airTime = airTime;
    this.reset= reset;

    // Axe de mouvement X et Z
    this.axisMovement = [false,false,false,false];

    // La hauteur de saut
    this.jumpHeight = 10;

    window.addEventListener("keyup", function(evt) {
        
        switch(evt.keyCode){
            case 90:
            case 38:
            _this.camera.axisMovement[0] = false;
            break;
            case 83:
            case 40:
            _this.camera.axisMovement[1] = false;
            break;
            case 81:
            case 37:
            _this.camera.axisMovement[2] = false;
            break;
            case 68:
            case 39:
            _this.camera.axisMovement[3] = false;
            break;
        }
    }, false);
    
    // Quand les touches sont relachées
    window.addEventListener("keydown", function(evt) {
        switch(evt.keyCode){
            case 90:
            case 38:
            _this.camera.axisMovement[0] = true;
            break;
            case 83:
            case 40:
            _this.camera.axisMovement[1] = true;
            break;
            case 81:
            case 37:
            _this.camera.axisMovement[2] = true;
            break;
            case 68:
            case 39:
            _this.camera.axisMovement[3] = true;
            break;
        }
    }, false);

    window.addEventListener("keydown", function(evt) {
        if (evt.keyCode == 16){
            this.isRunning = true;
            _this.speed = 0.8;
        }
    });

    window.addEventListener("keyup", function(evt) {
        if (evt.keyCode == 16){
            _this.isRunning = false;
            _this.speed = 0.4;
        }
    });

    // Quand la souris bouge dans la scène
    window.addEventListener("mousemove", function(evt) {
        if(_this.rotEngaged === true){
            _this.camera.playerBox.rotation.y+=evt.movementX * 0.001 * (_this.angularSensibility / 250);
            var nextRotationX = _this.camera.playerBox.rotation.x + (evt.movementY * 0.001 * (_this.angularSensibility / 250));
            if( nextRotationX < degToRad(90) && nextRotationX > degToRad(-90)){
                _this.camera.playerBox.rotation.x+=evt.movementY * 0.001 * (_this.angularSensibility / 250);
            }
        }
    }, false); 

    // Initialisation de la caméra
    this._initCamera(this.game.scene, canvas);

    // Si le joueur peut sauter ou non
    this.camera.canJump = true;

    //La hauteur du personnage
    _this.originHeight = _this.camera.playerBox.position.clone();
    window.addEventListener("keypress", function(evt) {
        if(evt.keyCode === 32){
            if(_this.camera.canJump===true){
                // On définit la hauteur de saut à la position actuelle du joueur
                // plus la variable jumpHeight
                _this.camera.jumpNeed = _this.camera.playerBox.position.y + _this.jumpHeight;
                _this.camera.canJump=false;
            }
        }
    }, false);

    // Le joueur doit cliquer dans la scène pour que controlEnabled soit changé
    this.controlEnabled = false;

    // On lance l'event _initPointerLock pour checker le clic dans la scène
    this._initPointerLock(); 
};


Player.prototype = {
    _initCamera : function(scene, canvas) {
        var playerBox = BABYLON.Mesh.CreateBox("headMainPlayer", 3, scene);
        playerBox.position = new BABYLON.Vector3(-20, 9, 0);
        playerBox.ellipsoid = new BABYLON.Vector3(2, 6, 2);
        
        // On crée la caméra
        this.camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 0, 0), scene);
        this.camera.playerBox = playerBox
        this.camera.parent = this.camera.playerBox;

        // Ajout des collisions avec playerBox
        this.camera.playerBox.checkCollisions = true;
        this.camera.playerBox.applyGravity = true;

        // Si le joueur est en vie ou non
        this.isAlive = true;

        // Pour savoir que c'est le joueur principal
        this.camera.isMain = true;

        // On ajoute l'axe de mouvement
        this.camera.axisMovement = [false,false,false,false];

        var hitBoxPlayer = BABYLON.Mesh.CreateBox("hitBoxPlayer", 3, scene);
        hitBoxPlayer.parent = this.camera.playerBox;
        hitBoxPlayer.scaling.y = 2;
        hitBoxPlayer.isPickable = true;
        hitBoxPlayer.isMain = true;
    },

    _initPointerLock : function() {
        var _this = this;
        
        // Requete pour la capture du pointeur
        var canvas = this.game.scene.getEngine().getRenderingCanvas();
        canvas.addEventListener("click", function(evt) {
            canvas.requestPointerLock = canvas.requestPointerLock || canvas.msRequestPointerLock || canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock;
            if (canvas.requestPointerLock) {
                canvas.requestPointerLock();
            }
        }, false);
    
        // Evenement pour changer le paramètre de rotation
        var pointerlockchange = function (event) {
            _this.controlEnabled = (document.mozPointerLockElement === canvas || document.webkitPointerLockElement === canvas || document.msPointerLockElement === canvas || document.pointerLockElement === canvas);
            if (!_this.controlEnabled) {
                _this.rotEngaged = false;
            } else {
                _this.rotEngaged = true;
            }
        };
        
        // Event pour changer l'état du pointeur, sous tout les types de navigateur
        document.addEventListener("pointerlockchange", pointerlockchange, false);
        document.addEventListener("mspointerlockchange", pointerlockchange, false);
        document.addEventListener("mozpointerlockchange", pointerlockchange, false);
        document.addEventListener("webkitpointerlockchange", pointerlockchange, false);
    },

    _checkMove : function(ratioFps) {
        let relativeSpeed = this.speed / ratioFps;
        if(this.camera.axisMovement[0]){
            forward = new BABYLON.Vector3(
                parseFloat(Math.sin(parseFloat(this.camera.playerBox.rotation.y))) * relativeSpeed, 
                0, 
                parseFloat(Math.cos(parseFloat(this.camera.playerBox.rotation.y))) * relativeSpeed
            );
            this.camera.playerBox.moveWithCollisions(forward);
        }
        if(this.camera.axisMovement[1]){
            backward = new BABYLON.Vector3(
                parseFloat(-Math.sin(parseFloat(this.camera.playerBox.rotation.y))) * relativeSpeed, 
                0, 
                parseFloat(-Math.cos(parseFloat(this.camera.playerBox.rotation.y))) * relativeSpeed
            );
            this.camera.playerBox.moveWithCollisions(backward);
        }
        if(this.camera.axisMovement[2]){
            left = new BABYLON.Vector3(
                parseFloat(Math.sin(parseFloat(this.camera.playerBox.rotation.y) + degToRad(-90))) * relativeSpeed, 
                0, 
                parseFloat(Math.cos(parseFloat(this.camera.playerBox.rotation.y) + degToRad(-90))) * relativeSpeed
            );
            this.camera.playerBox.moveWithCollisions(left);
        }
        if(this.camera.axisMovement[3]){
            right = new BABYLON.Vector3(
                parseFloat(-Math.sin(parseFloat(this.camera.playerBox.rotation.y) + degToRad(-90))) * relativeSpeed, 
                0, 
                parseFloat(-Math.cos(parseFloat(this.camera.playerBox.rotation.y) + degToRad(-90))) * relativeSpeed
            );
            this.camera.playerBox.moveWithCollisions(right);
        }

        var relativeConst = 0.4/ratioFps;
        if(this.camera.jumpNeed){
            // Lerp 
            percentMove = this.camera.jumpNeed - this.camera.playerBox.position.y;
            // Axe de mouvement
            up = new BABYLON.Vector3(0,percentMove/4 * relativeConst,0);
            this.camera.playerBox.moveWithCollisions(up);
            // On vérifie si le joueur a environ atteint la hauteur désirée
            this.reset++;
            if (this.reset > 30){
                this.camera.airTime = 0;
                this.camera.jumpNeed = 0;
                this.reset = 0;
            }
            if(this.camera.playerBox.position.y + 2 >= this.camera.jumpNeed.toFixed(1)-0.1){
                // Si c'est le cas, on prépare airTime
                this.camera.airTime = 0;
                this.camera.jumpNeed = 0;
                this.reset = 0;
            }
        }
        else{
            var rayPlayer = new BABYLON.Ray(this.camera.playerBox.position,new BABYLON.Vector3(0,-1,0));
            // On regarde quel est le premier objet qu'on touche
            // On exclut tous les meshes qui appartiennent au joueur
            var distPlayer = this.game.scene.pickWithRay(rayPlayer, function (item) {
                if (item.name == "hitBoxPlayer" || item.id == "headMainPlayer" || item.isPlayer)
                    return false;
                else
                    return true;
            });

            // targetHeight est égal à la hauteur du personnage
            var targetHeight = this.originHeight.y;
            // Si la distance avec le sol est inférieure ou égale à la hauteur du joueur -> On a touché le sol
            if(distPlayer.distance <= targetHeight){
                // Si c'est le joueur principal et qu'il ne peut plus sauter
                if(this.camera.isMain && !this.camera.canJump){
                    this.camera.canJump = true;
                }
                // On remet airTime à 0
                this.camera.airTime = 0;
            }
            else{
                // Sinon, on augmente airTime
                this.camera.airTime++;
                // Et on déplace le joueur vers le bas, avec une valeur multipliée par airTime
                this.camera.playerBox.moveWithCollisions(new BABYLON.Vector3(0,(-this.camera.airTime/30) * relativeConst ,0));
            }
        }
    }
};