pipeline {
    agent any
    tools {
        nodejs 'pepitoNode'
    }
    environment {
    VERCEL = credentials('vercel')
  }
    stages {
        stage('Dependencies') {
            steps {
                sh 'npm install'
            }
        }
    
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build and Deploy') {
            steps {
                script {
                    // Instalar dependencias y construir tu aplicación Vite
                    sh 'npm install'
                    sh 'npm run build'

                    // Implementar en Vercel usando el comando 'vercel' (asegúrate de tener 'vercel-cli' instalado)
                    sh 'npx vercel --prod --token $VERCEL --yes'
                }
            }
        }
    }
}
