import { Repository } from 'typeorm';
import { Board } from 'src/boards/board.entity';
import { CustomRepository } from 'src/typeorm-ex.decorator';
import { CreateBoardDto } from 'src/boards/dto/create-board.dto';
import { BoardStatus } from 'src/boards/board-status.enum';

@CustomRepository(Board)
export class BoardRepository extends Repository<Board> {
  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = createBoardDto;

    const board = new Board();
    board.title = title;
    board.description = description;
    board.status = BoardStatus.PUBLIC;
    await board.save();

    return board;
  }
}
