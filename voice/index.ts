import * as Peer from 'simple-peer';

class Voice {
    private peer: Peer.Instance;

    constructor() {
        this.peer = new Peer();

        this.peer.on('error', (err) => {
            this.handleError(err);
        });
    }

    private handleError(err: Error): void {

    }
}