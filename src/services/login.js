import api from '../services/api';

    const signIn = async (email, password) => {
            if (email === 0 || password === 0) {
              return("Digite suas credenciais") 
            } else {
              try { 
                const response = await api.post('/desenv/public/oauth/token', {
                  username: email,
                  password: password,
                  grant_type:"password",
                  client_id:2,
                  client_secret:"YgaD1vE5ixx7QgmpMTvVdjlUS7rmujQmRwOK3YIe",
                });

                console.log(email);

                let decoded = JwtDecode(response.data.access_token);
                  
                await AsyncStorage.setItem('@ApcamApp:token', response.data.access_token);
                await AsyncStorage.setItem('@ApcamApp:userId', decoded);
            } catch (_err) {
                return({ error: 'Houve um problema com o login, verifique suas credenciais!' });
              }
      }

    }

    export default signIn;