pipeline {
    agent any

    environment {
        PATH = "/opt/homebrew/bin:/usr/local/bin:${env.PATH}"
    }

    options {
        skipDefaultCheckout(true)
        timestamps()
        disableConcurrentBuilds()
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    docker.image('node:22-bookworm-slim').inside("-e HOME=${env.WORKSPACE_TMP} -e NPM_CONFIG_CACHE=${env.WORKSPACE_TMP}/.npm") {
                        dir('New-Learning-AI') {
                            sh 'npm ci'
                        }
                    }
                }
            }
        }

        stage('Type Check') {
            steps {
                script {
                    docker.image('node:22-bookworm-slim').inside("-e HOME=${env.WORKSPACE_TMP} -e NPM_CONFIG_CACHE=${env.WORKSPACE_TMP}/.npm") {
                        dir('New-Learning-AI') {
                            sh 'npm run typecheck'
                        }
                    }
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    docker.image('node:22-bookworm-slim').inside("-e HOME=${env.WORKSPACE_TMP} -e NPM_CONFIG_CACHE=${env.WORKSPACE_TMP}/.npm") {
                        dir('New-Learning-AI') {
                            sh 'npm run build'
                        }
                    }
                }
                archiveArtifacts artifacts: 'New-Learning-AI/dist/**', fingerprint: true
            }
        }
    }

    post {
        always {
            deleteDir()
        }
    }
}