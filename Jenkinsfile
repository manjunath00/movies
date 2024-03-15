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
                sh 'mkdir -p /path/to/destination/folder'
                sh 'cp -r * /path/to/destination/folder'
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
