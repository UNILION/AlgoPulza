package com.algopulza.backend.db.repository;

import com.algopulza.backend.db.entity.Problem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProblemRepository extends JpaRepository<Problem, Long>, ProblemRepositoryCustom {

    Problem findByBaekjoonId(int baekjoonId);

}
