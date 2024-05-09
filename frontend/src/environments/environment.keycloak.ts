export const environment = {
    keycloak:{
        url:'http://ec2-3-94-110-163.compute-1.amazonaws.com:9090',
        realm:'vizinhelp',
        clientId:'vizinhelp-front'
    }
}

const environmentDev={
    keycloak:{
        url:'http://localhost:9090',
        realm:'vizinhelp',
        clientId:'vizinhelp-front'
    }
}