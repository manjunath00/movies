pipeline {
    agent any

    stages {
        stage('Git Pull') {
            steps {
                // Checkout code from Git repository
                git 'https://github.com/your/repository.git'
            }
        }


        stage('Copy Files') {
            steps {
                // Copy pulled files to a specific folder
                sh 'mkdir -p /home/pradmin/micro_services/node_services/movies'
                sh 'cp -r * /home/pradmin/micro_services/node_services/movies'
            }
        }
        
        stage('NPM Install') {
            steps {
                // Install dependencies using npm
                sh 'npm install'
                sh 'pm2 start process.json'
            }
        }
        
    }
}
