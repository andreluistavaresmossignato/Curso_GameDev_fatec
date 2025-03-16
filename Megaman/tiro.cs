using UnityEngine;
//classe tiro herda da classe MonoBehaviour
public class Tiro : MonoBehaviour {
        //SerializedField deixa o atributo visível no Inspector  
        [SerializeField] private float velocidade = 20f;
        public int dano = 1;//dano que o tiro causa
        public float tempoTiro = 1.0f;//tempo que tiro fica no jogo
        private float timer = 0f;//controla o tempo do tiro

        void Update()//repete a cada milisegundo
        {
            //tiro se movimenta para a direita (right) sendo
            //calculando seu movimento por um intervalo (delta)
            //de tempo, e não por frame pois ai muda de máquina
            //por máquina dependendo do poder de processamento 
            transform.Translate(Vector2.right * velocidade * Time.deltaTime);
            //incrementado o time a partir do tempo do inicio
            //do tiro até enquanto ele estiver ativo (existir)
            timer += Time.deltaTime;

            //se o tempo for maior que o tempoTiro, tempo que o tiro
            //deve existir então...
            if (timer >= tempoTiro) {
                Destroy(gameObject);//destroi o objeto dessa classe
            }
        }//fim do metodo update

        //Esse método é específico do MonoBehaviour e ele
        //representa o Gatilho (Trigger) de colisão, ou seja
        //quando o objeto tem sua hitbox (area de colisão) definida
        //como Trigger este objeto não afeta a física de outros
        //objetos que colidir, apenas identificará que colidiu
        void OnTriggerEnter2D(Collider2D coliision) {
               //Se o objeto desta classe colidir com algum objeto
               //que tenha a Tag "Inimigo" então...

            if (coliision.gameObject.CompareTag("Inimigo")) {
                Destroy(collision.gameObject); //destroi o inimigo
                Destroy(gameObject); //auto destroi
            }
        }//fim do método para testar colisão

}//fim da classe Tiro