package com.algopulza.backend.db.repository;

import java.util.List;
import java.util.Set;

public interface ProblemHasTagRepositoryCustom {

    List<Long> findProblemIdByTagId(Set<Long> tagIdSet);

}
